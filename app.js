const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./common/config')
const app = express()
const router = require('./router/router')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(config.port,()=>{
    console.log("server listening on port number",config.port)
})

app.on('error',(error)=>{
    console.log('error',error)
})

app.use('/',router)