const express =require('express')
const app = express()
const crypto = require('crypto')
// 解析xml
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
app.use(bodyParser.xml());
// node内置做加密模块
const token ='1913heheda'


// 验证服务器
app.get('/token',(req,res)=>{
  console.log(req.query)
  let  {signature,echostr,timestamp,nonce}=req.query
  // 1）将token、timestamp、nonce三个参数进行字典序排序 
  let str=[token,timestamp,nonce].sort().join('')
  // 2）将三个参数字符串拼接成一个字符串进行sha1加密
  let cryptoStr=crypto.createHash('sha1').update(str).digest('hex')
  // 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
  console.log(cryptoStr)
  console.log(signature)
  if(cryptoStr===signature){
    res.send(echostr)
  }else{
    res.send('xxx')
  }

})
// 接受用户消息
app.post('/token',(req,res)=>{
  console.log(req.body)
  console.log('接受消息')
  let {ToUserName,FromUserName,Content}=req.body.xml
  let xml=`<xml>
  <ToUserName><![CDATA[${FromUserName}]]></ToUserName>
  <FromUserName><![CDATA[${ToUserName}]]></FromUserName>
  <CreateTime>12345678</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[${Content}]]></Content>
</xml>`
res.send(xml)
})
app.listen(80,()=>{
  console.log('server start')
})