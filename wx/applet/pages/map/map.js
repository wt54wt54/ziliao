// pages/map/map.js
Page({
 data:{
  //  circles:[{
  //    latitude: "40.22077",
  //    longitude: "116.23128",
  //    radius: 10000000000,
  //    color:'#ff0000',
  //    fillColor:'#ffff00'
  //  }],
   circles: [{
     latitude: 40.22077,
     longitude: 116.23128,
     color: '#FF0000',
     fillColor: '#7cb5ec',
     radius: 400000,
     strokeWidth: 2
   }],
   pos: { x: 113.324520, y: 23.099994},
   markers: [{
     iconPath: "/common/icon/all.png",
     id: 0,
     latitude: 40.22077,
     longitude:116.23128,
     width: 30,
     height: 30
   }],
   controls: [{
     id: 1,
     iconPath: '/common/icon/all.png',
     position: {
       left: 0,
       top: 600 - 50,
       width: 50,
       height: 50
     },
     clickable: true
   }]
 },
 onLoad(){
  //  let that =this
 this.refreshPos()
 },
  openLocation(){
   wx.openLocation({
     latitude: 40.22077,
     longitude: 116.23128,
     scale:18
   })
 },
//  点击控件
  controltap(e){
    this.refreshPos()
    console.log('点击控件',e)
  },
  refreshPos(){
    wx.getLocation({
      success: (res) => {
        console.log(res)
        let pos = { x: res.longitude, y: res.latitude }
        this.setData({ pos: pos })
      },
    })
  },
  markertap(e){
    console.log('marker',e)
  }
})