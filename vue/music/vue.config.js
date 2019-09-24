const path = require('path')
function resove(src){
  return path.join(__dirname,src)
}
module.exports = {
  devServer: {
    proxy: {
      '/hehe':{
        target:'http://ustbhuangyi.com', //目标服务器
        changeOrigin:true,
        pathRewrite:{
          '^/hehe':''
        }
      }
    }
  },
  chainWebpack:(config)=>{  //alias 起别名
    config.resolve.alias
    .set('components',path.join(__dirname,'./src/components'))
    .set('pages',path.join(__dirname,'./src/pages'))
    .set('style',resove('./src/style'))

  }
  // 起一个名字 代替 文件目录的绝对路径
}
//http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.07173379566119986
//http://10.60.14.25:8080/hehe/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.07173379566119986