const express  = require('express')
const app = express()
const db =  require('./db/connect')

const  AdminUserRouter = require('./router/adminUserRouter')

app.use('/admin/user',AdminUserRouter)
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