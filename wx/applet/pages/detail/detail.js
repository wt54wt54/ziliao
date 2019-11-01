import Detail from './detail-model.js'
import ShopCar from '../shopcar/shopcar-model.js'
const shopcar = new ShopCar()
const detail = new Detail()
Page({
  data:{
    pickers:[0,1,2,3,4,5,6,7,8,9],
    product:null,
    baseUrl:detail.baseUrl,
    selNum:0,
    allNum:0
  },
  onLoad(option){
    console.log('详情页的配置项', option)
    this.refreshData()
    this.getInfoById(option.id)
    // this.getInfoById('5c191df7ca7730b11d0ed8b0')
  },
  getInfoById(_id){
    detail.axios('GET',`/api/home/getGoodsById?_id=${_id}`)
    .then((data)=>{
      console.log(data)
      this.setData({ product:data.data[0]})
    })
  },
  // picker 确定时间触发
  bindChange(e){

    let index=e.detail.value
    console.log('index', index)
    this.setData({numSel:index})
  },
  // 加入购物车
  addCar(){
    console.log('加入购物车')
    let product = this.data.product
    product.num=parseInt(this.data.numSel)
    product.state = true
    shopcar.addCar(product)
    this.refreshData()
    
  },
  goShopCar(){
    wx.switchTab({
      url: "/pages/shopcar/shopcar",
    })
  },
  refreshData(){
    let allNum = shopcar.getAllNum()
    this.setData({ allNum: allNum })
  }
  
})