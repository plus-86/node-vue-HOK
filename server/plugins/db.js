module.exports = (app) => {
    const mongoose = require('mongoose')
    const MONGO_URI = 'mongodb+srv://root:mQ3zsHpihLnRhZtv@cluster0.wrbt7jd.mongodb.net/test'
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    // require-all 引用某个文件下的所有引用
    require('require-all')(__dirname + '/../models')


}
