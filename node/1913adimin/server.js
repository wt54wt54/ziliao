const express  = require('express')
const app = express()
const fs = require('fs')
const cors =require('cors')
const path = require('path')
const db =  require('./db/connect')
const request = require('request')
const Jwt = require('./utils/jwt')
// post 解析
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//cors 跨域
app.use(cors())
// 静态资源路径
app.use('/public',express.static(path.join(__dirname,'./public')))
app.use(express.static(path.join(__dirname,'./www')))
// 路由
const  AdminUserRouter = require('./router/adminUserRouter')
const  AdminFoodRouter = require('./router/adminFoodRouter')
const  AdminFileRouter = require('./router/adminFileRouter')
app.use('/admin/file',AdminFileRouter)
app.use('/admin/user',AdminUserRouter)
app.use('/admin/food',AdminFoodRouter)
// app.use('/admin/food',(req,res,next)=>{
//   let {token} = req.query
//   Jwt.verifyToken(token)
//   .then(()=>{
//     next()
//   })
//   .catch((err)=>{
//     res.send({err:-998,msg:'token失效请重新登录'})
//   })
// },AdminFoodRouter)

// 代理原理的实现
app.get('/cors',(req,res)=>{
  let url='http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.7823116929494485'
  request(url,(err,response,body)=>{
    if(err){
      res.send('跨域错误')
    }else{
      console.log(body)
      res.send(body)
    }
  })
})
function getData(){
  let url='http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.7823116929494485'
  request(url,(err,response,body)=>{
    if(err){

    }else{
      console.log(body)
    }
  })
}
// getData()
// app.get('/test',(req,res,next)=>{
//   console.log('中间件1')
//   next()
// },
// (req,res,next)=>{
//   console.log('中间件2')
//   next()
// },
// (req,res)=>{
//   console.log('hehe')
// })
app.listen(8080,()=>{
  console.log(`
  /**
 * 　　　　　　　 ┏┓　　　┏┓
 * 　　　　　　　┏┛┻━━━━━┛┻┓
 * 　　　　　　　┃　　　　　　┃ 　
 * 　　　　　　　┃　　　━　　 ┃
 * 　　　　　　　┃　＞　　＜　 ┃
 * 　　　　　　　┃　　　　　　 ┃
 * 　　　　　　　┃... ⌒ ... ┃
 * 　　　　　　　┃　　　　　　┃
 * 　　　　　　　┗━┓　　　┏━┛
 * 　　　　　　　　 ┃　　　┃　Code is far away from bug with the animal protecting　　　　　　　　　　
 * 　　　　　　　　 ┃　　　┃   神兽保佑,代码无bug
 * 　　　　　　　　 ┃　　　┃　　　　　　　　　　　
 * 　　　　　　　　 ┃　　　┃  　　　　　　
 * 　　　　　　　　 ┃　　　┃
 * 　　　　　　　　 ┃　　　┃　　　　　　　　　　　
 * 　　　　　　　　 ┃　　　┗━━━┓
 * 　　　　　　　　 ┃　　　　　　　┣┓
 * 　　　　　　　　 ┃　　　　　　　┏┛
 * 　　　　　　　　 ┗┓┓┏━┳┓┏┛
 * 　　　　　　　　　┃┫┫　┃┫┫
 * 　　　　　　　　　┗┻┛　┗┻┛
 */
  `)
})