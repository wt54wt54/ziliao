var express = require('express');
var app = express();
// 将socket 服务器和express 服务器结合
var server = require('http').Server(app);
var io = require('socket.io')(server);
const  path = require('path')
app.use('/',express.static(path.join(__dirname , './www')))

io.on('connection', function (clinet) {
  console.log('客户端连接')
  clinet.on('hehe',(msg) =>{
    console.log('来自服务器c端的数据',msg)
  })
  clinet.emit('haha','你中奖了')
});

server.listen(8081,()=>{
  console.log('server start')
});