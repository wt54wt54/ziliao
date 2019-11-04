const express =require('express')
const app = express()
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

// 接受用户消息
app.post('/token',(req,res)=>{
  console.log(req.body)
  console.log('接受消息')
  let {ToUserName,FromUserName,Content,ScanCodeInfo}=req.body.xml
  let media_id='-0nBEVUDHjvwEgKBxddgRvxjoe2l0g5SkADzyKUgUmrMD-vgoO5p-yFl7bYtjLmy'
  let xml=''
  console.log(ScanCodeInfo)
res.send(xml)
})
// 获取access_token 
function getToken(){
  let url=`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`
  axios.get(url)
  .then((data)=>{
    console.log(data.data)
  })
}
// getToken()
// 创建自定义导航
function creatMenu(){
let url =`https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${ACCESS_TOKEN}`
let data= {
  "button":[
  {	
      "name":"二级菜单",
      "sub_button":[
        {
          "type": "scancode_waitmsg", 
          "name": "扫码带提示", 
          "key": "rselfmenu_0_0", 
         
      }, 
      {
          "type": "scancode_push", 
          "name": "扫码推事件", 
          "key": "rselfmenu_0_1", 
      
      }
      ]
   },
   {	
      "type":"click",
      "name":"运势查询",
      "key":"key2"
  },
  {	
    "type":"view",
    "name":"音乐请听",
    "url":"http://ustbhuangyi.com/music/#/singer/002J4UUk29y8BY"
  }
  ]
}
 axios.post(url,data)
 .then((data)=>{
   console.log(data.data)
 })
}
// creatMenu()
function delMenu(){
  let url=`https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=${ACCESS_TOKEN}`
  axios.get(url)
  .then((data)=>{
    console.log(data.data)
  })
}
delMenu()
app.listen(80,()=>{
  console.log('server start')
})