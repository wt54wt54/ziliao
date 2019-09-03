const express = require('express')
const app = express()
const path = require('path')
const  bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))  //解析表单格式
app.use(bodyParser.json()) //解析json 数据格式

// 静态资源目录
// app.use('/haha',express.static(path.join(__dirname,'./hehe')))
// app.use('/',express.static(path.join(__dirname,'./www')))
app.use(express.static(path.join(__dirname,'./www')))
// localhost:3000/ 指向静态资源目录

app.get('/test/hehe',(req,res)=>{
    console.log('hehe')
    res.send('你好世界')
})
app.post('/postdemo',(req,res)=>{
  console.log('post')
  res.send('post测试')
})
// get 的登录接口
app.get('/login',(req,res)=>{
  let data=req.query   //get 方式获取数据
  console.log(data)
  if(data.us==='wangyi'&&data.ps==='123'){
    res.send('登录ok')
  }else{
    res.send('登录no ok')
  }
})
// post的注册接口
app.post('/reg',(req,res)=>{
  console.log('postdata',req.body)
})
app.listen(3000,()=>{
  console.log('server start')
})
//url localhost:3000/test/hehe  get