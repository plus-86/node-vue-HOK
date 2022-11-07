module.exports = options => {
    return async (req, res, next) => {
        // 以中间件的形式，处理路径/admin/api/rest/:resource上的resource
        // 用inflection包的classify方法把，首字母小写复数单词转化为首字母大写单数单词以获取模型名称
        const modelName = require('inflection').classify(req.params.resource)
        // 用模型名称获取对应的模型，挂载到请求参数的Model上
        req.Model = require(`../models/${modelName}`)
        next()
    }
}