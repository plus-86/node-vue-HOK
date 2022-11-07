// 小技巧，导出一个函数，它接收几个参数
// 在入口文件引用该函数并执行，同时传入一个在入口文件定义的app，express对象
// 这样在该文件就可以引用入口文件的app对象了
module.exports = (app) => {
    const express = require('express')
    // 创建子路由
    const router = express.Router({
        // 把父级路由的 params 合并进来，让子路由可以读到 :resource
        mergeParams: true
    })
    router.route('/')
        // 创建资源
        .post(async (req, res) => {
            let model = await req.Model.create(
                req.body
            )
            res.send(model)
        })
        // 资源列表
        .get(async (req, res) => {
            const queryOptions = {}
            // 每个模型自带modelName属性
            if (req.Model.modelName === 'Category') {
                queryOptions.populate = 'parent'
            }
            // 给特殊查询设定查询条件，当模型为 Category 时把关联的模型填充到 parent 字段
            let model = await req.Model.find().setOptions(queryOptions)
            res.send(model)
        })

    router.route('/:id')
        // 资源详情
        .get(async (req, res) => {
            let model = await req.Model.findById(req.params.id)
            res.send(model)
        })
        // 更新资源
        .put(async (req, res) => {
            let model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
            res.send(model)
        })
        // 删除资源
        .delete(async (req, res) => {
            await req.Model.findByIdAndDelete(req.params.id)
            res.send({
                success: true
            })
        })

    // 登录校验中间件
    const authMiddleware = require('../../middleware/auth')
    // 通用接口获取模型中间件
    const resourceMiddleware = require('../../middleware/resource')

    // 把上面所有路由挂载到/admin/api/rest/:resource

    // 客户端以传参的形式获取其需要的模型进行CRUD，这样后端就只需要写一套通用的CRUD口即可
    app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

    // multer 用于生成上传文件的相关信息,并存储到指定位置
    const multer = require('multer')
    // 定义中间件,将用户上传文件保存到本js文件绝对目录往上两级的uploads文件夹里
    const upload = multer({ dest: __dirname + '/../../uploads' })
    // 调用该中间件后,会将文件相关信息保存到req.file里
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), (req, res) => {
        const { file } = req
        // file属性内有个自动生成的filename属性,做成一个url返给用户,用于访问该文件
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login', async (req, res) => {

        const { username, password } = req.body
        // 1.根据用户名找用户
        const user = await AdminUser.findOne({ username }).select('+password') // 模型里排除掉的字段要加回来，否则不会返回该参数
        // 用户不存在
        assert(user, 422, '用户不存在')
        // 2.校验密码
        const isValid = require('bcryptjs').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')
        // 3.返回token

        const token = jwt.sign({
            id: user._id,
        }, app.get('APPSECRET'))// 这里的get方法和请求的get方法实际上是同一个，但是它可以通过传参判断是http请求或获取参数配置
        res.send({ token })
    })

    // 错误处理函数
    // 捕获异常
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}