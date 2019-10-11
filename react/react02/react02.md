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
      getDefaultProps(){
           return{

           } 
      }


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
数组每一项会被拆解  

#### 属性绑定
v-bind class style  href  src
属性名={}
#### 事件绑定
v-on
<div onClick={this.fun}>   
<div onClick={this.fun.bind(thisnull,1,2,3,4)}>
<div onClick={(e)=>{
      this.fun(1,2,3,e)
}}/>

#### 组件嵌套

#### 组件通信
props 传数据 父子
props 传方法 子父
ref 绑定子组件  父子通信
状态提升  找一个公有的父元素

#### 受控组件 非受控组件
并不是新的组件形式
获取表单数据的2种 方式
受控  表单元素的value 被state里的数据控制 通过onCange修改state值
非受控  通过ref绑定获取表单元素的值
#### 生命周期

##### 挂载阶段

##### 运行中

##### 卸载阶段
componentWillUnMount
#### 路由


#### 全局状态管理