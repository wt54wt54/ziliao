import Theme from './theme-model.js'
const theme = new  Theme()
Page({
  data:{
    products:[],
    topimg:'',
    baseUrl:theme.baseUrl
  },
  onLoad(option){
    console.log(option)
    let {themeid}=option
    this.getThemeData(themeid)
  },
  getThemeData(themeid){
    
    theme.axios('GET',`/api/home/getThemeById?themeid=${themeid}`)
    .then((data)=>{
      console.log(data)
      let {topimg,products} =data.data
      this.setData({ topimg, products})
    })
  },
  //跳转到详情页
  goDetail(e) {
    let { id } = theme.getDataSet(e)
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    })
  }  
})