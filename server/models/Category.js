const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String },
    // 新增父级字段，关联模型
    // mongodb的_id不是String, 要用以下type写入数据库
    // ref 关联模型，用 parent 字段关联 Category 模型，将来做填充用
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
})

module.exports = mongoose.model('Category', categorySchema)