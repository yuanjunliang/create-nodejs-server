const mongoose = require('mongoose')
const config = require('./config')

const conn = mongoose.createConnection(config.conn1.path,config.conn1.options)

conn.on('error',()=>{
    console.log('error occured from xueche');
})

conn.on('open',()=>{
    console.log('successfully opened the Node_Api')
})

exports.mongodb = conn