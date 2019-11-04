const express =require('express')
const app = express()
const path=require('path')
const ejs = require('ejs')
const randomstring=require('randomstring') 
const hash = require('./hash')
// node 模板引擎
const axios = require('axios')
const crypto = require('crypto')
const APPSECRET='109945fe6eaa597a4986445806faf7b1'//'01ba658324d0f025d92a57b1995c1452'
const APPID='wx1c7745a8af03f533'//'wx63f50fc9f88e1245'
const ACCESS_TOKEN='27_huJHGoT6JsIp-2RgNGPtxoLOV0l6jId3kETwOvslDX8yqLj8nTPaXN6sV0Gs_WLpeh3s6nYhyOHiLd-5OGlELFrkAcxAoGqn8oQcd8dd7SatE4sk_S2g_VCGeBsDyA66tDOHiZ8L9nC6kf8cPRHeAFAVXN'
// 解析xml
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
app.use(bodyParser.xml());
// node内置做加密模块
const token ='1913heheda'
// 验证jssdk的安全域名
//设置模板引擎目录
app.set(path.join(__dirname,'./views'),'views')  
app.set('view engine','ejs')  

app.get('/MP_verify_O7pxPBNkfsueenY6.txt',(req,res)=>{
  res.send('O7pxPBNkfsueenY6')
})

// app.get('/hehe',(req,res)=>{
//   res.render('hehe',{us:'网易',ps:'123'})
// })
let ticket='LIKLckvwlJT9cWIhEQTwfLQev6cCN9RLNOKHWaqBCYvYzZsjyKnU4zrkjFPqKMAEZDNXiGPkva-z08v67aDKKQ'
// 获取jsapi_ticket
function getTicket(){
  let url=`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${ACCESS_TOKEN}&type=jsapi`
  axios.get(url)
  .then((data)=>{
    console.log(data.data)
  })
}
// getTicket()
app.get('/wx',(req,res)=>{
  let obj={
    timestamp:(new Date).getTime() ,
    nonceStr:randomstring.generate(16),
    url:"http://qstest.natapp1.cc/wx",
    jsapi_ticket:ticket
  }
  let timestamp=(new Date).getTime()  
  let nonceStr=randomstring.generate(16);
  let signature=hash.createSignatue(obj)
  
  res.render('index',{appId:APPID,timestamp:obj.timestamp,nonceStr:obj.nonceStr,signature})
})

app.listen(80,()=>{
  console.log('server start')
})