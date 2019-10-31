import Category from './category-model.js'
const category = new Category()
Page({
  data:{
    category:['面食','煎档','烧烤','酒水','特色菜'],
    sel:0,
    products:[]  // 数组嵌套对象  包含所有的产品信息
  },
  // 导航事件
  navSel(e){
    // selindex 0-4
    let {selindex} = category.getDataSet(e)
    console.log(selindex)
    this.setData({ sel: selindex})
    // 切换nav  获取新的数据
    // 接口的类型id 是 1-5
    this.getCategoryDataById(selindex+1)
  },
  //根据id 获取数据
  getCategoryDataById(id){
    let exitIndex = category.isExit(this.data.category[id-1])
    console.log('数据存在id',exitIndex)
    // exitIndex -1 数据本地没有  
    if (exitIndex===-1){
      // 数据没有发起请求 并且保存本地
      category.axios('GET',`/api/home/goodsByType?type=${id}`)
      .then((data)=>{
        console.log(data)
        let products = this.data.products
        products.push(data)
        console.log(products)
        wx.setStorageSync('category', products)
        this.setData({ products: products})

      })
    }else{
      //数据有从本地获取
      if (this.data.products.length===0){
      let products=wx.getStorageSync('category')
      this.setData({ products, products})      
      }
      
    }
  },
  onLoad(){
    this.getCategoryDataById(1)
  }
})