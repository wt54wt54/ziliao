import  React,{Component}from 'react'
import PropTypes from  'prop-types'
// 通过context 实现组件公用 store对象
// 通过connect高阶组件 实现 监听 获取全局状态值的统一
export default (RenderComponent)=>{
  class NewComponent extends Component{
      componentDidMount(){
        this.context.store.subscribe(()=>{
          this.setState({})
        })
      }
      render(){
        let obj=this.context.store.getState()
        console.log(obj)
        console.log('connect',this)
         return(<RenderComponent store={ obj }></RenderComponent>)
      }
      componentWillUnmount(){
        this.context.store.unsubscribe()
      }
  }
  NewComponent.contextTypes={
    store:PropTypes.object
  }
   return NewComponent
}