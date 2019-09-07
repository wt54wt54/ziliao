const express = require('express')
const router = express.Router()
const FoodModel = require('../db/model/foodModel')
// 获取全部商品信息
router.get('/getFoods',(req,res)=>{
  FoodModel.find()
  .then((data)=>{
     res.send({err:0,msg:'获取信息ok',list:data})
  })
})
//分页 + 分类 + 关键字
router.get('/getFoodsByPage',(req,res)=>{
  let page = req.query.page||1
  let pageSize = req.query.pageSize||3
  let count = 0
  let foodType = req.query.foodType
  let obj={}  //{foodType:'热菜'}
  if(foodType) {obj.foodType=foodType}
  FoodModel.find(obj) // 获取总数据条数
  .then((data)=>{
    count=data.length
    return  FoodModel.find(obj).skip(Number((page-1)*pageSize)).limit(Number(pageSize)) //分页后的数据
  })
  .then((data)=>{  
    res.send({err:0,msg:'获取信息ok',list:data,count:count})
 })
})
//添加商品
router.get('/addFood',(req,res)=>{
  let {name,price,imgPath,foodType,desc}= req.query  
  FoodModel.insertMany({name,price,imgPath,foodType,desc})
  .then((data)=>{
     console.log(data)
     res.send({err:0,msg:'添加ok'})
  })
})
// 删除商品
router.get('/delFood',(req,res)=>{
  let {_id} = req.query
  FoodModel.deleteOne({_id})
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
})
// 分类查询 
// router.get('/getFoodsByType',(req,res)=>{
//   let {foodType} = req.query
//   FoodModel.find({foodType})
//   .then((data)=>{
//     res.send({err:0,msg:'获取信息ok',list:data})

//   })
// })

// 关键字查询
router.get('/getFoodByKw',(req,res)=>{
  let {kw} = req.query
  let reg=new RegExp(kw)  //创建正则对象
  FoodModel.find({$or:[{name:{$regex:reg}},{desc:{$regex:reg}}]})
  .then((data)=>{
    res.send({err:0,msg:'获取信息ok',list:data})
  })
})
// 修改
router.get('/updateFood',(req,res)=>{
  let {_id,name,price,imgPath,foodType,desc}= req.query  
  FoodModel.updateOne({_id:_id},{name,price,imgPath,foodType,desc})
  .then((data)=>{
     console.log('update',data)
     res.send({err:0,msg:'updateok'})
  })
})
module.exports = router