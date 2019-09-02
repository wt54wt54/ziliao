const  fs = require('fs');

// 文件夹相关  c（create）u（updtate）r(read)d(del)

// let result=fs.mkdirSync('./hehe')

// fs.mkdir('./hehe123',(err)=>{
//   console.log(err)

// })
// console.log(2)
// fs.rename('./hehe','./haha',(err)=>{
//   if(err){
//     console.log('改名出错')
//   }else{
//     console.log('改名ok')
//   }
// })
// fs.rmdir('./haha',(err)=>{
//   if(err){
//     console.log('改名出错')
//   }else{
//     console.log('改名ok')
//   }
// })
// fs.readdir('./',(err,dirs)=>{
//   console.log(err)
//   console.log(dirs)
// })
// 错误的回调优先 在异步的回调中 第一参数表示错误状态  默认 null 
// 文件的创建  覆盖写入
  //  fs.writeFile('./user.txt','你好',(err)=>{
  //   console.log(err)
  //  })
// 文件的累加写入
// fs.appendFile('./user.txt','今儿天气不错',(err)=>{
//   console.log(err)
// })
// 文件的读取
// fs.readFile('./user.txt',(err,msg)=>{
//   console.log(msg.toString())
// })
// 文件的删除
// fs.unlink('./user.txt',(err)=>{
//   console.log(err)
// })

// 判断文件的状态
fs.stat('./hehe123',(err,state)=>{
  console.log(err,state)
  console.log(state.isFile())
})