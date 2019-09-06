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

### 03day

#####  文件版本的登录注册
1. 写2个接口 登录注册
2. 接受用户数据 us  ps
3. 处理用户数据  
    a.读取本地数据
    b.对比用户名密码是否一致
4. 返回结果
  {code：0,txt:'登录ok'}  //错误码 0  -1   msg：错误提示  data：返回的数据


####  数据库
mysql    关系型数据库 （多表关联）
mongodb  非关系型数据库  （文档型数据库） 每一条数据是类json结构 可以存任何东西
mongoose  一个模块用来在node中操作数据库 
mongodb   文档型数据库
mongo     cmd 命令  命令行中操作数据库
mongod    cmd 命令  启动数据库
#### 安装mongodb
1. 下载安装
2.  坑1：2个 v 取消
3.  mongod  启动数据库
    坑2： 缺少数据库文件  c/data/db
    坑3： xx不是内部外部命令  环境变量   将 安装路径 .../bin 目录 加入到环境变量 ；进行分割

####  cmd环境联系sql语句

##### db

db  查看当前使用数据库
show dbs  显示所有数据库
use dbname  新建一个数据库（临时数据库） 切换数据库
db.dropDatabase() 删除数据库

mac 安装
1.先安装xcode
2.usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
homebrew
brew -v
brew install  mongodb

##### collection（集合 类似于表）

##### document(文档 就是 数据)

###### 查询 (read )
db.集合名.find() 查询所有
db.集合名.find().pretty() 查询所有 格式化
###### 插入 (create)
db.集合名.insert({}) 插入一条
db.集合名.insert([{},{}]) 插入多条
插入的每一条数据都是一个对象  可以插入任何数据  包扩 arr  obj
没有表头的概念  每一条数据内容都可以不一样
默认主键 _id 
###### 更新 （update）
db.user.save({})  插入数据的id 如果已存在 是更新  如果不存在相当于创建
db.user.update(查询条件,是修改的数据,是否修改全部)
db.user.update({age:999},{$set:{age:10}},{multi:true})
###### 删除 （del  remove unlink）
db.user.remove(条件)
db.user.remove({}) 全部删除
###### 条件
固值  {age:555}

范值  {age:{$gt:555}} $gte $lt  $lte  $ne 
交并集查询 $and  $or
      {$and:[{age:{$gt:100}},{age:{$lt:888}}]}

###### 分页
pageSize 每页几条
page 第几页
10    3   4
1-3
4-6
7-9
10 
db.user.find().skip((page-1)*pageSize).limit(pageSize)
####  node 来操纵数据库
1. 和数据库连接
```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1913',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', (err)=>{
  console.log('db err')
});
db.once('open', function() {
  console.log('db ok')
});
```
2. 创建schema对象
3. 将schema对象转化为数据模型
4. 调用模型下的方法操作数据库

### 作业
用户登录注册  数据库版

### node04

#### promise
多个异步操作按照顺序执行->嵌套->回调地狱->promise

a.基本使用
1. 在一个函数内部 返回 promise 对象
2. promise 对象的内部也有回调  resolve reject
3. promise 对象有3中状态  等待  成功 resolve then进行处理  失败 reject catch处理
```js
function fun1 (){
  return new Promise((resolve,reject)=>{
     // 异步处理
     resolve('ok') //ok resolve 的数据 then可以接受
     
     reject('nook') // no ok catch的数据对应的就是 reject的数据
  })
}
fun1()
.then((data)=>{

})
.catch((err)=>{

})
```
b. 链式调用 fun1 fun2 fun3 fun4
```js
fun1()
.then(()=>{
  return fun2()
})
.then(()=>{
  return fun3()
})
.then(()=>{
  return fun4()
})
.catch(()=>{

})
链式调用中任何一个出现错误（reject() throw ） 终止执行  由catch 捕获错误
```

#### 后台管理系统
1. 对应的api接口
   food
   a.查询所有菜品  v
   b.分页查询    v
   c.添加商品    v
   d。删除商品     删除一条  删除多条v
   e. 修改商品  
   f. 模糊查询  $regex
   g. 分类查询  v
   user
   reg  v
      1. 邮箱 账号  是否存在
      2. 发送验证码
      3. 验证ok
      4. 操作数据库写入信息
      5. 返回结果
   login v
2. 根据api接口通过js jq 形成页面


#### 中间件  拦截器   middleware
```js
app.get('/test',(req,res,next)=>{},(req,res)=>{

})
```
中间件数量可以有无线个

####
jwt