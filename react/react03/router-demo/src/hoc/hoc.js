// hoc 1是一个函数  接受组件作为参数  返回新组件
import React ,{Component,Fragment}from 'react'
import Model from './Model'
// 抛出的高阶组件函数
export default (RenderComponent)=>{
  //RenderComponent 接受的组件  要渲染的组件
  // 作为中间统一处理的新组件的新组件
 class NewComponent extends Component{
  constructor(){
    super()
    this.state={
      name:'暂无数据',
      login:false
    }
  }
  componentDidMount(){
   if(localStorage.getItem('token')){
     this.setState({login:true})
   }else{
     this.setState({login:false})
   }
  }
  render(){
    return(
      <Fragment > 
        {/* 使用Fragment 保持页面dom结构不发生变化 */}
        {/* 渲染接受到的组件 */}
        {this.state.login}
        {this.state.login?<RenderComponent name={this.state.name}></RenderComponent>:<Model></Model>}
      </Fragment>
    )
  }
 }

 return  NewComponent
}