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


