const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
  res.send('前台login ok')
})

router.post('/reg',(req,res)=>{
  res.send('前台reg ok')
})
module.exports = router