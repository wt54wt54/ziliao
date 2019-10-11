import React ,{Component}from 'react'
import  './test.css'
class Son extends Component{
  constructor(){
    super()
    this.state={
      style:{width:'50px',height:'50px',background:"skyblue"}
    }
  }
  render(){
    return(
      <div className='test'>
        这里是子组件
        <div style={this.state.style}>

        </div>
      </div>
    )
  }
}
// 路由地址 https://reacttraining.com/react-router/web/guides/quick-start

export default Son