const fs=require('fs')
const path=require('path')
// ./ 当前的执行路径 而不是 文件所在的路径
// fs.readFile('./test.html',(err)=>{
//   console.log(err)
// })
// __dirname 当前文件所在的绝对路径 该路径和执行路径没有任何关系
console.log(path.join(__dirname,'./test.html'))
fs.readFile(path.join(__dirname,'./test.html'),(err)=>{
  console.log(err)
})