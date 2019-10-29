 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  userSchema=new Schema({
    //  _id:{type:String,required:true},
     user:  {type:String,default:null},
     pass:  {type:String,default:null},
     openid:{type:String,required:true},
     session_key:{type:String,required:true},
     nickName: {type:String,default:null},
     avatarUrl:{type:String,default:null},
     goodslist:{type:Array,default:[]},
     ctime: { type: Date, default: Date.now }

 })

 let userModel=mongoose.model('wxuser',userSchema)
 module.exports=userModel