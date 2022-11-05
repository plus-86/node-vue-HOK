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
        .post(async (req, res) => {
            let model = await req.Model.create(
                req.body
            )
            res.send(model)
        })
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
        .get(async (req, res) => {
            let model = await req.Model.findById(req.params.id)
            res.send(model)
        })
        .put(async (req, res) => {
            let model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
            res.send(model)
        })
        .delete(async (req, res) => {
            await req.Model.findByIdAndDelete(req.params.id)
            res.send({
                success: true
            })
        })



    // 把上面所有路由挂载到/admin/api/rest/:resource

    // 客户端以传参的形式获取其需要的模型进行CRUD，这样后端就只需要写一套通用的CRUD口即可
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        // 以中间件的形式，处理路径/admin/api/rest/:resource上的resource
        // 用inflection包的classify方法把，首字母小写复数单词转化为首字母大写单数单词以获取模型名称
        const modelName = require('inflection').classify(req.params.resource)
        // 用模型名称获取对应的模型，挂载到请求参数的Model上
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

}