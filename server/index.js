require('dotenv').config()
// 跨域包
const cors = require('cors')()

const express = require('express')

const app = express()
// 跨域包写在路由前
app.use(cors)
// 使用express的static中间件,表示用户访问http://localhost:3000/uploads时,可以获取到项目uploads文件内所有静态资源
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))

//解析json
app.use(express.json())




// 小技巧
require('./plugins/db')(app)

require('./routes/admin')(app)

require('./routes/web')(app)



app.set('APPSECRET', 'ljsdjdfkjsfklsjdlkfjdsl')


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Node is listening port ${PORT}...`);
})

