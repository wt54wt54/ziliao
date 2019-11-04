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
  let media_id='-0nBEVUDHjvwEgKBxddgRvxjoe2l0g5SkADzyKUgUmrMD-vgoO5p-yFl7bYtjLmy'
  let xml=''
  console.log(Content)
  if(Content[0]==='图片'){
    xml=`<xml>
    <ToUserName><![CDATA[${FromUserName}]]></ToUserName>
    <FromUserName><![CDATA[${ToUserName}]]></FromUserName>
    <CreateTime>12345678</CreateTime>
    <MsgType><![CDATA[image]]></MsgType>
    <Image>
      <MediaId><![CDATA[${media_id}]]></MediaId>
    </Image>
  </xml>`
  }else if(Content[0] === '每日音乐'){
  let arr=[
    {
      title:'病态',
      des:'超好听',
      url:'http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400003gfggs1r3Bcc.m4a?guid=7915720366&vkey=9725003CF8D8D995BD96F91D86B03DF2CC7EA077D301E1F7F9C771080C4AA11E6280C181A334CCFDC6C55CE79FF242A16E6155C387FDB51D&uin=0&fromtag=38'
    },
    {
      title:'演员',
      des:'超好听',
      url:'http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400003mBrF72dILfK.m4a?guid=7915720366&vkey=C5102AADF229CE00C00DAFC266B0D2EB65DB4481B2D18DA9D598BE107CE0B78AD29DAD2401E0D351A74BDAE4B7DC359C9D05A6534B03DEE0&uin=0&fromtag=38'
    },
    {
      title:'呵呵哒',
      des:'超好听',
      url:'http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400003gfggs1r3Bcc.m4a?guid=7915720366&vkey=9725003CF8D8D995BD96F91D86B03DF2CC7EA077D301E1F7F9C771080C4AA11E6280C181A334CCFDC6C55CE79FF242A16E6155C387FDB51D&uin=0&fromtag=38'
    }
  ]
  let music=arr[parseInt(Math.random()*100)%3]  //0 1 2
  let media_id='-0nBEVUDHjvwEgKBxddgRvxjoe2l0g5SkADzyKUgUmrMD-vgoO5p-yFl7bYtjLmy'
  xml=`<xml>
  <ToUserName><![CDATA[${FromUserName}]]></ToUserName>
  <FromUserName><![CDATA[${ToUserName}]]></FromUserName>
  <CreateTime>12345678</CreateTime>
  <MsgType><![CDATA[music]]></MsgType>
  <Music>
    <Title><![CDATA[${music.title}]]></Title>
    <Description><![CDATA[${music.des}]]></Description>
    <MusicUrl><![CDATA[${music.url}]]></MusicUrl>
    <HQMusicUrl><![CDATA[${music.url}]]></HQMusicUrl>
    <ThumbMediaId><![CDATA[${media_id}]]></ThumbMediaId>
  </Music>
</xml>
`
  }else{
    xml=`<xml>
      <ToUserName><![CDATA[${FromUserName}]]></ToUserName>
      <FromUserName><![CDATA[${ToUserName}]]></FromUserName>
      <CreateTime>12345678</CreateTime>
      <MsgType><![CDATA[text]]></MsgType>
      <Content><![CDATA[${Content}]]></Content>
    </xml>`

  }
  console.log(xml)
res.send(xml)
})
app.listen(80,()=>{
  console.log('server start')
})