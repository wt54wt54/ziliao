import Base from '../../utils/util.js'

class ShopCar extends Base {
  constructor() {
    super()
  }
  // 获取购物车缓存
  getData(){
    return wx.getStorageSync('shopcar') || []
  }
  // 修改购物车缓存
  setData(data){
    wx.setStorageSync('shopcar', data)
  }
  // 添加 将数据添加到缓存里
  addCar(obj) {
    let carData = this.getData()
    // 商品 如果已经存在 数量++ 不存在才是push
    let existIndex = this.isExist(obj)
    if (existIndex === -1){
      carData.push(obj)
    }else{
      //  如果重复num相加
      let num = parseInt(carData[existIndex].num) + parseInt(obj.num)
      carData[existIndex].num=num
    }
   
    this.setData(carData)
  }
  // 判断加入购物车的商品是否存在 -1 表示没重复  其他表示重复的下标
  isExist(obj){
    let _id=obj._id  //获取要判断数据的主键id
    let  exindex =-1
    let data=this.getData() //获取缓存数据
    data.map((item,index)=>{
      if(item._id===_id){
        // 有了
        exindex=index
      }
      return item
    })
    return exindex
  }
  // 获取商品的总数量
  getAllNum(){
    let num =0
    let data=this.getData()
    data.map((item,index)=>{
      num+=item.num
      return item
    })
    return  num
  }
  // 全选
  selectAll(bool){
    let data=this.getData()
    data.map((item,index)=>{
      item.state = bool
      return item
    })
    this.setData(data)

  }
  //单选
  selectOne(index){
    let data = this.getData()
    data[index].state = !data[index].state
    this.setData(data)
  }
}


// 修改 
// 删除
// 单选
// 全选
// 下单
export default ShopCar