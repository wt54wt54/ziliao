const express  = require('express')
const axios = require('axios')
const app =express()
const appsecrect='7d217d5b50191e6c4c9caf695701668f'
const appid='wx5e6344cedcbf76a9'
const db = require('./db/connect')
const User = require('./db/model/userModel')
// 微信登录
app.get('/wxlogin',(req,res)=>{
  console.log(req.query)
  const {code} = req.query
  // 调用微信的服务器查询openid
  let url=`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appsecrect}&js_code=${code}&grant_type=authorization_code`
  axios.get(url)
  .then((wxdata)=>{
    console.log(wxdata.data)
    let userInfo={}
    let {session_key,openid} =wxdata.data
    // 获得openid  
    //  查询数据库是否有opendid 
     User.find({openid})
     .then((data)=>{
        if(data.length==0){
          // 注册的逻辑
          User.insertMany({session_key,openid} )
          .then((data)=>{
            console.log('刚注册id',data[0]._id)
            userInfo._id=data[0]._id 
            userInfo.user=data[0].user
            res.send({msg:'login ok',userInfo:userInfo,state:'wx'})
          })
        }else{
          console.log('已注册的id',data[0]._id)
            userInfo._id=data[0]._id 
            userInfo.user=data[0].user
            res.send({msg:'login ok',userInfo:userInfo,state:'wx'})
        }

     })
   
  })
})
// 绑定手机号
app.get('/bindPhone',(req,res)=>{
  let {_id,user,pass}=req.query
  User.updateOne({_id},{user,pass})
  .then((data)=>{
    console.log('修改成功',data)
    res.send({msg:'绑定成功',user:user})
  })
})
//获取用户信息
app.get('/getOrder',(req,res)=>{
  let {_id}=req.query
  User.findOne({_id})
  .then((data)=>{
    console.log(data)
    res.send({msg:'订单查询ok',err:0,list:data.goodslist})
  })
})
// 手机号和密码登录
app.get('/phoneLogin',(req,res)=>{
  let {user,pass} = req.query
  User.find({user,pass})
  .then((data)=>{
    if(data.length==1){
      let userInfo={}
      userInfo._id=data[0]._id 
      userInfo.user=data[0].user
      res.send({msg:'login ok',userInfo:userInfo,state:'phone'})
    }else{
      res.send({msg:'login nook',err:-1})
    }
  })
})
app.listen(3000,()=>{
  console.log('server start')

})