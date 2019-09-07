const express = require('express')
const router = express.Router()
const Mail = require('../utils/mail')
const UserModel = require('../db/model/userModel')
const Jwt = require('../utils/jwt')
let codes={} //保存产生的验证码
// [{1111@qq.com:1234},{2222@qq.com:5786}]
// 引入用户的数据模型
// 验证邮箱是否存在
router.get('/checkMail',(req,res)=>{
  let {us} = req.query
  UserModel.find({us})
  .then((data)=>{
    if(data.length){
      res.send({err:-1,msg:'邮箱已占用'})  
    }else{
      res.send({err:0,msg:'邮箱可用'})
    }
  })
  .catch((err)=>{
    console.log(err,'no ok')
  })
})
// 发送验证码
router.get('/sendMail',(req,res)=>{
  let  {mail} = req.query 
  let  code = parseInt(Math.random()*10000) //随机验证码
  codes[mail]=code
  // 回调方式
  // Mail.send(mail,code,(state)=>{
  //   console.log('邮件发送状态',state)
  //   if(state ===1){
  //     res.send({err:0,msg:'send ok'})
  //   }else{
  //     res.send({err:-1,msg:'send nook'})
  //   }
  // })
  // rides
  Mail.send(mail,code)
  .then(()=>{
    res.send({err:0,msg:'send ok'})
  })
  .catch(()=>{
    res.send({err:-1,msg:'send nook'})
  })
})
// 注册接口 middleware 拦截器
router.get('/reg',(req,res,next)=>{
//验证验证嘛的中间件
let  {us,code} = req.query
// 比较用户传递的验证码和我们产生的验证码是否一致
console.log(us,code,codes ,codes[us])
if(Number(code) === Number(codes[us])){
  next()
}else{
  res.send({err:-1,msg:'验证码错误'})
}

},(req,res)=>{
  let {us,ps} = req.query
  UserModel.insertMany({us,ps})
  .then((data)=>{
    console.log(data,'ok')
    res.send({err:0,msg:'reg ok'})
  })
  .catch((err)=>{
    console.log(err,'no ok')
  })
})

/**
 * @api {get} /admin/uesr/login  用户登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} us 用户账号
 * @apiParam {String} ps 用户密码.
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg.
 * @apiSuccess {String} token  token  .
 */

router.get('/login',(req,res)=>{
   let {us,ps} = req.query
   UserModel.findOne({us,ps})
   .then((data)=>{
     if(data){
      let token=Jwt.createToken({uid:data._id},7*24*60*60)
      res.send({err:0,msg:'login ok',token:token})
     }else{
      res.send({err:-2,msg:'login nook'})
     }
     
   })
   .catch((err)=>{
     res.send({err:-1,msg:'内部错误'})
   })
})

module.exports = router