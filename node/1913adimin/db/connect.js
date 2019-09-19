var mongoose = require('mongoose');
mongoose.connect('mongodb://47.92.170.186:27017/1913');
var db = mongoose.connection;
db.on('error', ()=>{
  console.log('db no ok ')
});
db.once('open', function() {
  console.log('db  ok ')
});