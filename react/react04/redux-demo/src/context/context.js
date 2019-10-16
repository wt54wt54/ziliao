import  React from  'react'
import PropTypes from  'prop-types'
class Provider extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.store=props.store
  }
  getChildContext(){
    //在跟组件注册上下文 子组件都可以用
    console.log('给子组件赋予context')
    return{
      store:this.store
    }
  }
  render(){
    console.log(this)
    return(
      this.props.children
    )
  }
}
Provider.childContextTypes={
  store:PropTypes.object
}

export default Provider 
