require('dotenv').config()
// 跨域包
const cors = require('cors')()

const express = require('express')

const app = express()

//解析json
app.use(express.json())

app.use(cors)


// 小技巧
require('./routes/admin')(app)

require('./plugins/db')(app)


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Node is listening port ${PORT}...`);
})

