const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String },
    // 新增父级字段，关联模型
    // mongodb的_id不是String, 要用以下type写入数据库
    // ref 关联模型，用 parent 字段关联 Category 模型，将来做填充用
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
})

// 给Category定义一个字段名为children的虚拟类属性
// 关联Category模型
// 用内键和外键的值进行匹配，
categorySchema.virtual('children', {
    ref: 'Category', // 关联的模型
    localField: "_id", // 内键(被填充对象的键)
    foreignField: 'parent', // 外键(关联模型的键)
    justOne: false,

})

categorySchema.virtual('newsList', {
    ref: 'Article',
    localField: "_id",
    foreignField: 'categories',
    justOne: false,
})


module.exports = mongoose.model('Category', categorySchema)