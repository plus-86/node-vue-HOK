const mongoose = require('mongoose')

const adminUserSchema = new mongoose.Schema({
    username: { type: String },
    password: {
        type: String,
        // 查用户的时候不返回密码, 此时编辑页面密码虽然为空, 但不会因此而将密码更新为空字符串
        select: false,
        // 密文保存密码, bcrypt不会加密空字符串
        set(val) {
            return require('bcryptjs').hashSync(val, 10)
        }
    }
})

module.exports = mongoose.model('AdminUser', adminUserSchema)