Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'韩梅梅',
    list: ['https://fc3tn.baidu.com/it/u=779034314,172872806&fm=202&src=bqdata',
    'https://fc3tn.baidu.com/it/u=779034314,172872806&fm=202&src=bqdata',
    'https://fc3tn.baidu.com/it/u=779034314,172872806&fm=202&src=bqdata']
  },
  changename(e){
    console.log('改名',e)
    // this.data.name='李雷'
    this.setData({name:'李雷'})
    // console.log(this)
  },
  jumpRedirect() {
    console.log('重定向跳转')
    // wx.redirectTo({
    //   url: '/pages/index/index?us=123&ps=456',
    // })
    wx.navigateTo({
      url: '/pages/index/index?us=123&ps=456',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('首页加载', options)
    wx.setNavigationBarTitle({
      title: '零食天地',
    })
    // wx.showTabBarRedDot({
    //   index: 0,
    // })
    wx.setTabBarBadge({
      index: 0,
      text: '999',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('首页渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showActionSheet({
      itemList: ['微信支付','支付宝支付','刷脸'],
      success:(data)=>{
        console.log(data)
      }
    })
    // wx.showToast({
    //   title: 'hehe',
    // })
    // wx.showModal({
    //   title: '主体',
    //   content: '内容',
    // })
    console.log('下拉刷新了')
    // wx.showLoading({
    //   title: '数据加载ing',
    // })
    // setTimeout(()=>{
    //   wx.hideLoading()
    //   wx.stopPullDownRefresh()
    //   // 停止下拉刷新
    // },1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:'首页',
      path:'/pages/home/home',
      imageUrl:'http://p0.meituan.net/wedding/565da1bb1c688d688996940869486c84207106.jpg%40watermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
    }
  }
})