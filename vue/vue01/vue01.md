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

#### 组件
1.全局组件
2.局部组件

#### 作业
1.用组件写一个todolist
2.课程表
   a.隔行变色  红 绿
   b.鼠标滑过有特殊标识
   c.写一个下拉菜单  红绿  黑白  蓝黄

