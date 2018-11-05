const express = require('express')
const router = express.Router()
module.exports = router

const UserController = require('../controllers/UserController')


// users
router.post('/user/user_regist',UserController.user_regist)