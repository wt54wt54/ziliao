
### 小程序的登录 
1. 获取用户信息  赋予权限  告诉后端 当前正在使用小程序的人是谁
2. uid userid 用户的意唯一id 用户的身份证号
3.  第三方登录

1.如果 只用小程序能用 直接将 用户wx的openid 作为项目的用户id 
  获取微信的opendid

2. 有小程序也有web页面  自己维护用户id

第三方登录 auth2.0
1.调用 wx.login code
2.调用自己服务器端写的接口   携带code 返回token
### 小程序支付 
认证 300 企业认证
1.先调用自己服务器的下单接口  返回5个参数 时间戳 加密签名 预订单id（packeage） 随机字符创
2.wx.requestPayment  调起小程序支付