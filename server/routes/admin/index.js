// 小技巧，导出一个函数，它接收几个参数
// 在入口文件引用该函数并执行，同时传入一个在入口文件定义的app，express对象
// 这样在该文件就可以引用入口文件的app对象了
module.exports = (app) => {
    const express = require('express')
    const Category = require('../../models/Category')
    // 创建子路由
    const router = express.Router()
    router.post('/categories', async (req, res) => {
        let category = await Category.create({
            name: req.body.name
        })
        res.send(category)
    })

    // 把上面所有路由挂载到/admin/api
    app.use('/admin/api', router)
}