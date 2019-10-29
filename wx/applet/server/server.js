const express =require('express')
const app =express()
const appid='wx5e6344cedcbf76a9'
const appsecret='693e33f9a5eb0ebe0ec6bc86664226cd'
const axios = require('axios')
app.get('/wxlogin',(req,res)=>{
  let {code} =req.query
  let url=`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appsecret}&js_code=${code}&grant_type=authorization_code`
  axios.get(url)
  .then((data)=>{
    console.log(data.data)
    res.send({msg:'登录ok',openid:data.data.openid,err:0})
  })
  .catch((err)=>{
    console.log(err)
  })
})
app.listen(3000,()=>{
  console.log('servert start')
})