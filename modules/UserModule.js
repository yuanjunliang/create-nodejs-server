const mongoose = require('mongoose')

const schema = {
    user_id:{type:String,required:true},
    username:{type:String,required:false},
    password:{type:String,required:true},
    email:{type:String,required:false},
    phone:{type:String,required:true}
}

const collectionName = 'users'
const UserSchema = mongoose.Schema(schema)
const UserModel = mongoose.model(collectionName,UserSchema)

module.exports = UserModel