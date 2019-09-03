// const cheerio = require('cheerio')
// const fs=require('fs')
// fs.readFile('./test.html',(err,data)=>{
//     let string=data.toString()
//     const $ = cheerio.load(string)
//     $('img').each((index,el)=>{
//       console.log(index)
//       console.log($(el).attr('src'))
//     })
// })
const request = require('request')
const fs=require('fs')
let  imgurl='http://source.qunarzz.com/piao/images/camel_238_180.jpg'
// request(imgurl,(err,response,body)=>{
//   console.log(err)
//   fs.writeFile('./demo.jpg',body,{encoding:'binary'},(err)=>{
//     console.log(err)
//   })
// })
// createWriteStream 创建一个写入流
// 文件数据传输 流传输
request(imgurl).pipe(fs.createWriteStream('./demo.jpg'))
