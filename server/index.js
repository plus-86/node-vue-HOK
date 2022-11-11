require('dotenv').config()
// 跨域包
const cors = require('cors')()

const express = require('express')

const app = express()
// 使用express的static中间件,表示用户访问http://localhost:3000/uploads时,可以获取到项目uploads文件内所有静态资源
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))

//解析json
app.use(express.json())

app.use(cors)


// 小技巧
require('./plugins/db')(app)

require('./routes/admin')(app)

require('./routes/web')(app)



app.set('APPSECRET', process.env.APPSECRET)


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Node is listening port ${PORT}...`);
})

