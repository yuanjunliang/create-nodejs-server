const UserModule = require('../modules/UserModule')


exports.user_regist = (req,res)=>{
    let reqParams = req.body
    let username = reqParams.username
    let phone = reqParams.phone

    let params = {username,phone}

    UserModule.create(params,(error,result)=>{
        if(error){
            res.send({code:1,err_msg:'注册失败'})
        }else{
            res.send({code:0,response:result})
        }
    })
}