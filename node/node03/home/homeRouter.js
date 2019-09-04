const express = require('express')
const router = express.Router()
const fs = require('fs')
const path =  require('path')
const qs = require('querystring')
// loclahost:3000/home/login
router.get('/login',(req,res)=>{
  let {us,ps} = req.query
  let dir = path.join(__dirname,'./user.txt') 
  // 读取文件的路径
  fs.readFile(dir,'utf8',(err,userData)=>{
      if(err){
        res.send({err:-3,msg:'内部错误请重试'})
      }else{
        console.log(userData)
        console.log('用户数据解析',qs.parse(userData))
        // 多用用数据拆分
         let userArr=userData.split('@@')
         let newData=userArr.map((item)=>{
           return  qs.parse(item)
         })
         let state = false  //用没有满足条件
         for (let index = 0; index < newData.length; index++) {
             let tmp=newData[index]
             if(tmp.us === us && tmp.ps === ps){
              state = true
              break;
             }   
         }//循环判断文件里的密码是否有满足条件
        if(state){
          res.send({err:0,msg:'login ok'})
        }else{
          res.send({err:-1,msg:'login nook'})
        }

      }
  })

})
// loclahost:3000/home/reg
router.post('/reg',(req,res)=>{
  let {us,ps} = req.body
  // 
  let string=`@@${qs.stringify({us,ps})}`
  console.log(string)
  try {
    fs.appendFileSync(path.join(__dirname,'./user.txt'),string)
  } catch (error) {
   return  res.send({err:-1,msg:'reg nook'})
  }
  res.send({err:0,msg:'reg ok'})
})

module.exports = router