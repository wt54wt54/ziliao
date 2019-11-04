
import ShopCar from './shopcar-model.js'
const shopcar = new ShopCar()
Page({
  data:{
    lists: shopcar.getData(),
    baseUrl:shopcar.baseUrl,
    selNum:0,
    selPrice:0
  },
  onLoad(option){
  //  初始化的时候执行一次
  },
  onShow(){
    this.refresh()
  },
  // 切换选中状态
  changeSel(e){
   let index = shopcar.getDataSet(e,'index')
   shopcar.selectOne(index)
   this.refresh()
  },
  refresh(){
    let lists = shopcar.getData()
    // 获取选中的数量  和价格
    let selNum=shopcar.getSelNum()
    let selPrice =shopcar.getSelPrice()
    this.setData({ lists, selNum, selPrice})
  },
  // 修改数量
  changeNum(e){
   let {index,type}=shopcar.getDataSet(e)
    console.log({ index, type })
    if(type===1){
      // 数量+
      shopcar.changeNum(index,type)
    }else if(type ===-1){
      //数量-
      shopcar.changeNum(index, type)
    }else{
      //删除
      shopcar.del(index)
    }
    this.refresh()
  },
  // 跳转到订单页
  goOrder(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  }
   
})