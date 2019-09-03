const request = require('request')
const fs=require('fs')
let url='https://piao.qunar.com/'
request(url,(err,response,body)=>{
  console.log(body)
  fs.writeFileSync('./test.html',body)
})