import ShopCar from '../shopcar/shopcar-model.js'
const shopcar = new ShopCar()
Page({
  getAdress(){
    wx.chooseAddress({
      success(data){
        console.log(data)
      }
    })
  },
  payment(){
    // 1.调用自己的下单接口 传订单数据
    // 2.返回5个参数 
    // wx.requestPayment({
    //   timeStamp: '',
    //   nonceStr: '',
    //   package: '',
    //   signType: '',
    //   paySign: '',
    //   success(){

    //   }
    //   complite
    // })
    setTimeout(()=>{
      // 付款成功 前端订单状态是已付款 代发货
      // 将购物车中的选中该数据删除
      // 跳转到我的页面
      // 付款失败 前端订单状态是未付款 
      // 将购物车中的选中该数据删除
      // 跳转到我的页面
      let orders=shopcar.createOrder()
      console.log(orders)
      let  data=wx.getStorageSync('orders')||[]
      console.log(data)
      data.push(orders)
      wx.setStorageSync('orders', data)
      wx.switchTab({
        url: '/pages/login/login',
      })
    },1000)
  }
})