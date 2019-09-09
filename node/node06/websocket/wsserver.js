const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 })
let clients=[] //保存所有已连接的客户端对象
ws.on('connection',(client)=>{
// 客户端连接触发   client 客户端对象 有多个 和页面对应
clients.push(client)
console.log('有客户端连接了')
  // setTimeout(()=>{
  //   client.send('恭喜中奖')
  // },3000)
  client.on('message',(msg)=>{
    console.log('来自客户端的消息',msg)
  })
  client.on('close',()=>{
    console.log('客户端主动断开连接')
  })
})
setTimeout(()=>{
  sendAll('恭喜中奖')
},15000)
function sendAll(msg){
  for (let index = 0; index < clients.length; index++) {
      clients[index].send(msg)
    
  }
}
