const express = require('express')
const app =express()

app.get('/admin/login',(req,res)=>{
  res.send('后台login ok')
})

app.post('/admin/reg',(req,res)=>{
  res.send('后台reg ok')
})

const  HomeRouter = require('./homeRouter')
app.use('/home',HomeRouter)

// app.get('/home/login',(req,res)=>{
//   res.send('前台login ok')
// })

// app.post('/home/reg',(req,res)=>{
//   res.send('前台reg ok')
// })

// const AdminRouter = require('./adminRouter')

// app.use('/admin',AdminRouter)

//localhost:6666/admin/login
app.listen(6666,()=>{
  console.log('server start')
})