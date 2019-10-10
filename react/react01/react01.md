react 
版本 ：16.10.2 
      15.6 版本
官网： https://reactjs.org
vue  mvvm   
angular  mvc
react  v   虚拟dom  单向数据流   组件开发

vue     react 
实例      x
组件      v
数据绑定
指令
过滤器
计算属性
watch
### react01
1. react.min.js  React 对象
2. react.dom.js  ReactDOM      Native  rn  reactNative  app
3. browser.min.js  解析jsx
4. script  type='text/babel' 
```
var Conponent = React.creataClass({
      render(){
            return(
                  <div>
                  jsx
                  </div>
            )
      }
})
ReactDOM.render(要挂载的组件,目标的dom元素)
```
#### 数据承载方式
state  
      组件内部的数据 在组件里可以修改 
      getInitailState(){
        return {
              放到state里
        }
      }
props  来自于组件外部  只能使用不能修改


#### 数据绑定
{ 表达式}
#### 条件渲染
v-if
{ this.state.show?<span></span>:""}
{ !this.state.show||<span></span>}
{ this.fun()}
function  fun(){
  if(this.state.show){
        return(
              <span></span>
        )
  }else{
        return false
  }
}
#### 列表渲染
v-for

#### 属性绑定
v-bind class style  href  src
#### 事件绑定
v-on

#### 组件嵌套



#### 组件通信



#### 生命周期


#### 路由


#### 全局状态管理