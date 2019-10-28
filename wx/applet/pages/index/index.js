Page({
  onLoad(){
    // wx.setStorageSync('info1', {us:123,ps:456})
    // console.log(wx.getStorageSync('info'))
    // wx.removeStorageSync('info')
    wx.clearStorageSync()
    console.log(111)
    wx.request({
      url: 'http://47.95.207.1:8080/v1/user/login', //仅为示例，并非真实的接口地址
      data: {
        us: '123',
        ps: '123'
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  jumpTab(){
    wx.switchTab({
      url: '/pages/home/home?us=123&ps=456',
    })
  },
  jumpReLanch(){
    wx.reLaunch({
      url: '/pages/home/home?us=123&ps=456',
    })
  },
  jumpRedirect() {
    console.log('重定向跳转')
    wx.redirectTo({
      url: '/pages/home/home?us=123&ps=456',
    })

  },

  onUnload(){
    console.log('index 卸载')
  }
})