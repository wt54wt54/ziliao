var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1913',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', (err)=>{
  console.log('db err')
});
db.once('open', function() {
  console.log('db ok')
});
// 创建schema对象 当成表头
var userSchema = mongoose.Schema({
  name:String,
  pass:String,
  age:Number,
});
// 把schema对象变成数据模型 schema对象和数据库里的某一个集合关联
// 关联的表名会自动变成复数
var User = mongoose.model('child', userSchema);
// promise
// User.find({age:{$gte:17}})
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log('出错了',err)
// })
// User.insertMany({name:'wangyi',pass:'hehe',age:18})
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log('出错了',err)
// })

// User.remove({age:{$gte:17}})
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log('出错了',err)
// })

User.updateOne({age:160},{$set:{name:'123'}})
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log('出错了',err)
})