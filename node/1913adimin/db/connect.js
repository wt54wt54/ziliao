var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.01/1913');
var db = mongoose.connection;
db.on('error', ()=>{
  console.log('db no ok ')
});
db.once('open', function() {
  console.log('db  ok ')
});