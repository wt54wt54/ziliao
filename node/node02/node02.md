### node
node 是一个 基于chormeV8的js运行环境 （platfrom runtime）
1.非阻塞的i/o模型
2.事件驱动

### node的前世今生
node 
npm
npm install  sass -g
npm install  sass -D （--save-dev） development 开发项目依赖
npm install  sass -S  （--save） 生产项目依赖
npm uninstall sass -g
npm set config registry 淘宝的景象地址
npm  cache clean -f  清除缓存
npm  view  sass version   查看最新的
npm  view  sass versions  查看所有的线上版本  

### 模块化开发 （对某一功能的封装）
AMD CMD commonjs
1. 创建模块抛出 一个js文件一模块  module.exports=xxx
2. 引入模块  require('')
3. 使用模块

###  模块分类
1.内置模块  官方文档中的都是内置模块
  a. 不需要下载安装
  b. const  name=require('模块名')
2.第三方模块
  a. 下载安装
  b. const  name=require('模块名')
3.自定义模块
  a.创建抛出模块
  b.引入使用模块 const  name=require('模块文件的路径')
### 代码中的错误捕获
1.同步 try catch
2.异步 错误的回调优先
### 内置模块
  fs  文件夹   文件    curd

### 第三方模块

nodemailer   用来发送邮件


##### 注册逻辑
1.前端正则验证 
2.判断用户名存在
3.发送手机验证码 邮箱验证码
4.60s倒计时
5.验证码的验证码 图片验证码  滑动验证码


###  作业 
1.打印当前文件的目录树
 a.读取当前的文件夹
 b.文件 直接输出  文件夹 在读取一遍
 c.递归
2.思考实现一个邮箱验证码的注册系统
3.查询资料了解seo 以及爬虫
4.预习内置模块  queryString  URL

## node02

### 爬虫（request cheerio）
1. 爬取网站的相关文件 request
2. 分析文件内容获取有效信息  cheerio
3. 下载图片  
### url
统一资源定位符 
http://www.baidu.com
http://www.baidu.com:80
http://www.baidu.com:80/admin/login
http://127.0.0.1:80/admin/login
dns 服务器

url.parse()

url.format()

### querystring
parse()  stringify()  escape()  unescape()

### path
__dirname 当前文件所在的路径
path.join()  路径拼接


#### api
前后端实现交互的工具
api接口的4要素
1. url
2. method get  post()
3. params  参数  数据类型
4. response 返回数据

前端：调用接口 传递参数  根据返回数据做响应处理
后端： 1.接受数据 2.处理数据 3. 返回数据

### express koa
http://www.expressjs.com.cn/
#### 基本使用
const express = require('express')
const app = express()
app.get('/login',()=>{

})

app.listen(3000,()=>{
  
})
#### 参数传递
1. get  req.query
2. post req.body  json   x-www-form-urlencode
express 本身不能解析 post数据  需要body-parser插件

#### 静态资源路径（静态服务器）www
app.use('/',express.static(文件夹的绝对路径))
 
#### 路由
使用类似于app的创建
api按照功能进行拆分
const router = express.Router()
router.get('/login',(req,res)=>{})
module.exports= router

引入路由  
const xxxRouter = require('path')
app.use('/admin',xxxRouter)
#### 名字解析 
前台  使用者       home 
后台  xxx管理后台  admin
前端 
后端



