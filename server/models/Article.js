const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    body: { type: String }
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)