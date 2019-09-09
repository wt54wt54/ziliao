const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 })
let clients=[] //保存所有已连接的客户端对象
ws.on('connection',(client)=>{
  console.log('client 连接')
  clients.push(client)
  client.send(JSON.stringify({msg:'欢迎光临',type:'welcome'}))
  client.on('close',()=>{
    console.log('客户端断开连接')
  })
})
function sendAll(msg){
  console.log('sendAll',clients)
    for (let index = 0; index < clients.length; index++) {
      if(index%3===0){
        clients[index].send(JSON.stringify({msg:msg,type:'reward'}))
      }else{
        clients[index].send(JSON.stringify({msg:'谢谢光临',type:'reward'}))
      }
      
    }
}
module.exports ={sendAll}