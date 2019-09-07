const express  = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const db =  require('./db/connect')
// post 解析
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
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
app.listen(3000,()=>{
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