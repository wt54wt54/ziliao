import Login  from './login-model.js'
const login = new Login()
Page({
  data:{

  },
  bindGetUserInfo(){
    wx.getUserInfo({
      success(data){
        console.log(data)
      }
    })
  },
  login(){
    wx.login({
      success(res){
        console.log(res)
        console.log(login)
        // 服务器端登录接口
        login.axios('GET',`/wxlogin?code=${res.code}`,{})
        .then((data)=>{
          console.log(data)
        })
      }
    })
  }
})