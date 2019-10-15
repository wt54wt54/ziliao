// hoc 1是一个函数  接受组件作为参数  返回新组件
import React ,{Component,Fragment}from 'react'
// 抛出的高阶组件函数
export default (RenderComponent)=>{
  //RenderComponent 接受的组件  要渲染的组件
  // 作为中间统一处理的新组件的新组件
 class NewComponent extends Component{
  constructor(){
    super()
    this.state={
      name:'暂无数据'
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({name:'李雷'})
    },500)
  }
  render(){
    return(
      <Fragment > 
        {/* 使用Fragment 保持页面dom结构不发生变化 */}
        {/* 渲染接受到的组件 */}
        <RenderComponent name={this.state.name}></RenderComponent>
      </Fragment>
    )
  }
 }

 return  NewComponent
}