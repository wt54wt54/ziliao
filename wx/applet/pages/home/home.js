import Home from  './home-model.js'
const home = new Home()
Page({
  data:{
    banners:[],
    products:[],
    themes:[],
    baseUrl:home.baseUrl
  },
  onLoad(){
    this.getHomeData()
  },
  getHomeData(){
    // let url ='http://localhost:3003/api/home/getHome'
    home.axios('GET','/api/home/getHome')
    .then((data)=>{
      console.log(data)
      let { banners, products, themes} = data.data 
      this.setData({ banners, products, themes})
    })
  },
  //跳转主题页
  goTheme(e){
    console.log(e)
    let {themeid}=home.getDataSet(e)
    // console.log(e)
    wx.navigateTo({
      url: `/pages/theme/theme?themeid=${themeid}`,
    })

  },
  //跳转到详情页
  goDetail(e){
    let {id}=home.getDataSet(e)
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    })
  }   
  
})