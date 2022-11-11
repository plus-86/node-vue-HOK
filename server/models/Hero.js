const mongoose = require('mongoose')

const heroSchema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    title: { type: String },
    // 英雄分类关联到Category表,一个英雄可能属于多个分类所以是数组
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    // 评分
    scores: {
        difficult: { type: Number },
        skills: { type: Number },
        attack: { type: Number },
        survive: { type: Number },
    },
    // 技能
    skills: [{
        icon: { type: String },
        name: { type: String },
        description: { type: String },
        tips: { type: String },
    }],
    // 顺风/逆风出装
    items1: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Item'
    }],
    items2: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Item'
    }],
    // 使用技巧
    usageTips: { Type: String },
    // 对抗技巧
    battleTips: { Type: String },
    // 团战思路
    teamTips: { Type: String },
    // 最佳搭档
    partners: [{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
        description: { type: String }
    }]

})

module.exports = mongoose.model('Hero', heroSchema, 'heroes') // mongoose默认创建的集合名只会在单词后面加个s表示复数，不合理，所以用第三个参数自定义集合名称