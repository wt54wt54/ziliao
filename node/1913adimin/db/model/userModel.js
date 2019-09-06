// 和用户集合相关的 scheme 对象和数据模型
const mongoose = require('mongoose')
const  userSchema =  mongoose.Schema({
  us:{type:String,required:true} ,
  age:{type:Number,default:0}, //age 字段有数据按照数据来 没有数据 默认0
  ps:{type:String,required:true}   //us ps 字段 类型是字符串 必须项
})

const  model = mongoose.model('users',userSchema)

module.exports =  model