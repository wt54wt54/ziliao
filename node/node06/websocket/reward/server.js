const express = require('express')
const app = express()
const ws = require('./ws')
app.use('/',express.static('./www'))
app.get('/reward',(req,res)=>{
  console.log('1111')
   ws.sendAll('恭喜中奖')
})
app.listen(3000,()=>{
  console.log('server  start')
})