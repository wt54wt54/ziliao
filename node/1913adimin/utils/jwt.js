var jwt = require('jsonwebtoken');
// let payload ={
//   uid:1231312,
//   name:'hehehe'
// }
// let screat = 'sjlfsl;fwoiklsaja;flsfj' 
// // var token = jwt.sign(payload, screat,{expiresIn:60});
// // console.log(token)
//  let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEyMzEzMTIsIm5hbWUiOiJoZWhlaGUiLCJpYXQiOjE1Njc4Mzk4NTAsImV4cCI6MTU2NzgzOTkxMH0.1HR_9ioZSptmz-SjxFGWYCoDY91PnKkxBi4xu20aV2s'
// jwt.verify(token,screat,(err,data)=>{
//   console.log(err,data)
// })
const screat = 'sjlfsl;fwoiklsaja;flsfj' 
module.exports={
  createToken(payload,expires){
    let token =jwt.sign(payload,screat,{expiresIn:expires})
    return token
  },
  verifyToken(token){
   return new Promise((resolve,reject)=>{
     jwt.verify(token,screat,(err,data)=>{
        if(err){
          reject(err)
        }else{
          resolve(data)
        }
     })
   })
  }
}
