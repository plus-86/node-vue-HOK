const mongoose = require('mongoose')

const heroSchema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String }
})

module.exports = mongoose.model('Hero', heroSchema)