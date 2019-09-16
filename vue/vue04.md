#### 什么是vue
angular  谷歌团队  mvc   10%     最难     极低 令人发指    7。8      双向数据绑定  1，2 4 虚拟dom 
react    fackbook团队 v  40%     中等     高             16.9      虚拟dom
vue      尤雨溪    mvvm  35%      简单     高             2        虚拟dom+双向数据绑定
<!-- mvvm  mvc   mvp -->
m（model）v（view）c（controller）
m（model）v（view）vm（viewmodel）

### 虚拟dom
虚拟dom 就是一个对象 和真实dom相互对应
页面发生修改 不直接修改真实dom 先修改虚拟dom  统一跟新真实dom 
大量的减少真实dom操作从而提高页面的效率
``` js
{
  tag:'div',
  id:'test',
  
  class:'hehe',
  style:'color:red',
  text:'hehe',
  children:[
    {
      tag:'p'
    },
    {
      tag:span
    }
  ]
}
{
  tag:'nav',
  id:'test',
  class:'hehe',
  style:'color:red',
  text:'hehe',
  children:[
    {
      tag:'p'
    },
    {
      tag:span
    }
  ]
}
<div id ='test' class='hehe'>
hehe 
<p></p>
<span><span>
</div>

<nav id ='test' class='hehe'>
hehe 
<p></p>
<span><span>
</nav>
```
#### vue高效特点
1.对开发者来说  从此之后远离dom ，增加操作数据
vue 将开发者的精力从dom操作转移到了数据操作
2.对页面运行效率 通过虚拟dom提高页面的运行效率 
#### vue 的实例
new Vue({
  el:'#app',
  data:{
    name:''
  },
  methods:{
    toggle(){

    }
  }
})
#### vue基本指令
v-html
v-text
v-if、v-show
v-for
v-on:click
v-bind 属性绑定

##### vue特点
1.数据的响应式 数据变页面自动变
2.组件化 模块化

#### 组件 创建组件  注册组件
1.全局组件
创建组件
let hehe = Vue.extend({ tempalte:'',data:methos})
注册组件
Vue.component('hehe',hehe)

Vue.component('hehe',{ tempalte:'',data:methos})


2.局部组件
创建和全局组件一样 
注册组件的方式 是通过 配置项下的 
{
  data:(),
  methods:{},
  componnets:{
    '组件名1':{配置项}，
  }
}

#### 作业
1.用组件写一个todolist
2.课程表
   a.隔行变色  红 绿
   b.鼠标滑过有特殊标识
   c.写一个下拉菜单  红绿  黑白  蓝黄


### vue02
#### 组件的嵌套
全局组件嵌套  本身没有父子关系  由嵌套关系形成
局部组件嵌套  在注册的同时 父子关系已经确定
#### 组件通信
1. 父子
   父子通信 父组件可以让子组件干啥事
     <hehe :xixi  ></hehe>
     1.props 父组件通过props传递一个值到子组件 子组件和传递过的的props值建立联系 父组件修改值子组件会做响应的变化
       从而达到父元素控制子元素的效果
       对于一个组件来说  data的数据可以修改 props里的数据只能用不能改
      
   子父通信 子组件可以让父组件做啥事
     1.通过porps 将父组件的方法传给子组件 由子组件调用父组件的方法 从而实现子元素控制父元素
     2.通过自定义事件  $emit 可以触发绑定在自己身上的自定义事件
2. 兄弟 
   a.亲兄弟
     结合父子和子父  状态提升
   b.远方亲戚
     状态提升 可以实现的
     事件总线 eventbus
     1.创建空的实例对象  let ang = new Vue()
     2.实例对象上注册一个事件  ang.$on('事件名','事件的处理函数')
     3.只要获得到空对象就可以触发注册事件   ang.$emit('事件名',a,b,c,d)
3. vuex全局状态管理

### 生命周期  生命周期的钩子函数
随缘  入世和出世  0-1-0
出生前 ：猥琐发育别浪
出生（入世）  
 打怪升级 
育儿园
小学
初中
高中
大学
考研
社会大学
结婚生子
回顾人生 解决遗憾
离世
组件的一生
创建  发育  beforecreate created
挂载  出生  beforeMount  mounted
更新  在世打怪升级 breforeUpdate  updated
销毁  离世  breforeDestroy   destroyed

#### 作业
1. todolist 组件版
2. banner不能滚动的bug
3. 有一个div 鼠标的滚轮控制div 随机改变颜色
4. 预习剩余生命周期

### vue03
生命周期
 名子         数据      dom      功能
beforecreate  无       无       无
* created       有       无       请求数据
beforeMount   有       无       请求数据
* mounted       有       有       初始化dom元素
breforeUpdate 有 更新后 有更新前  监听数据变化 
updated       有 更新后 有更新后  监听数据变化 
* breforeDestroy 有      有       擦屁股   计时器  全局监听
destroyed     有       没有     擦屁股   计时器  全局监听

页面缓存
keepalive

#### vue/cli 脚手架工具

npm install  -g @vue/cli   3.0  2018年下半年  有  2019年初 
配置插件更方便
npm install  -g  vue-cli   2.9.6  2017 1018
vue  命令 
vue --version
vue -V  查看vue脚手架工具的版本
vue create  项目名字

npm run serve  本地服务器启动vue项目
npm run build  上线前 压缩打包操作

目录结构
dist 上线压缩代码
node_modules  插件
public  公有资源目录
    index.html 文件 整个vue的项目唯一的html入口文件 启动文件
src    源码目录
   assets   资源目录
   components  组件
   App.vue    单文件组件
   main.js    js的入口文件


spa 单页面应用
优点 
 只有页面 ‘页面的跳转’ 组件的切换  页面切换流畅
 组件开发  组件复用  开发便捷
缺点 
  首次加载过慢
  seo优化不好

mpa 多页面应用 100页面
缺点  页面切换重新加载不流畅
100个页面  10k
mpa 首页 10k  每一个页面10k
spa 首页 1000k  跳转页面不加载
### bem 命名法
button-primary-small
项目 ：http://ustbhuangyi.com/music/#/recommend

#### 单文件组件
一个xxx.vue文件就是一个组件
1. 模板
```html
<template>
  页面基本结构
</template>  
```
2.js vm
```js
export default{
  data:(){}
  methods:{}
  mounted(){}
  ...
}
```
3 本组件的样式
```css
<style scoped>
样式
</style>
```
#### 组件嵌套
1. 引入组件 import 组件名 from  '组件的路径'
2. components 注册组件
3. 把组件名当成标签名使用
#### 文件引入
import 变量名 from ‘模块名’ 第三方模块
import 变量名 from  ‘路径’
样式文件
@import  '路径'

### vuer04 
路由 
1. 控制地址栏的改变 
   <router-link> </router-link>
2. 根据地址栏的改变渲染不同的组件
   <router-view></router-view>
##### 基本使用
1. 引入文件 Vue  vue-router
2. 使用vuerouter  Vue.use(VueRouter)
3. 引入使用的组件 import Login from './componets/login‘
4. 创建路由对象 建立url和组件之间的联系
  const router = new VueRouter({
    routes:[
      {
        path:'/login',
        component:Login
      }
      ....
    ]
  })
  export default router
5.在实例里注册路由对象
  new Vue({
    router:router
  })

路由表创建并且注册ok之后 提供2个组件
router-link 等同于 a  可以控制地址栏的改变
to='/path' 用于控制地址栏的改变
active-class=’hehe‘ 表示激活状态的类名
tag='elname' 将router-link渲染为任何元素 
router-view 在页面上开辟一片空间 用来渲染配置地址栏的组件的组件
通过 router-link 实现 路由的切换 声明式导航

编程式导航 用js 控制路由的切换
所有的api  this.$router对象下
a->b->c->d
push 会将页面加入到页面的缓存栈 
replace  不会将页面加入到缓存栈
go(num)
goback()

<a href='www.baidu.com'>  声明式
window.location.href='www.baidu.com'  编程式

命名导航  通过name属性给导航起一个名字 
可以通过 this.$router.push({name:name}) 进行跳转

命名视图  通过name属性给router-view 指定名字  在一个页面同时渲染多个不同的组件需要用

#### 路由传参
路由跳转的同时传递参数
query
this.$router.push({path:'/login',query:{us:123,ps:456}})
params 不能和path同时使用
this.$router.push({name:'login',params:{us:123,ps:456}})
this.$route 来接受参数

#### 动态路由
1. 配置路由表的时候将path配置成动态参数
{path:'/login',component:Login}  正常路由   localhost:30000/login
{path:'/login/:hehe/:xixi',component:Login} localhost:30000/login/随意/随意
动态路由里的信息可以在$route对象下的params 进行获取  
#### 嵌套路由
1.在router-view 嵌套router-view
2.在路由表里通过children 指定嵌套信息
3.所有的子路由 path 千万不要加/

### 项目
适配 显示  一套代码  在不同的尺寸上显示ok
  pc  百分比布局 响应式 媒体查询  flex布局  浮动和定位
  移动 rem+flex
  1. 将设备的宽度/num作为根元素的大小
  设计分辨率  375*667 iphone 6s   750*1134   440

兼容
  浏览器兼容 
  swiper 4版本  在ios11 以上  ios10 不支持

#### less 预处理语言   
变量  @声明变量
嵌套  等同于sass
mixin 封装函数的方式封装样式 
计算  可以做数字变量的计算

rem+less 实现移动端适配规则


### 网络请求
原生ajax 可以用
jq  可以用 不推荐 
axios
fetch









