import React ,{Component,Fragment} from 'react'
import {withRouter} from 'react-router-dom'

class CustomNav extends Component{
  jump=(path)=>{
    console.log('nav',this)
    this.props.history.push(path)
  }
  render(){
    return(

    <Fragment>
      <ul>
        <li onClick={this.jump.bind(this,'/home')}>home</li>
        <li onClick={this.jump.bind(this,'/reg')}>reg</li>
      </ul>
    </Fragment>
      )
    
  }
}
let newComponent= withRouter(CustomNav)
// 给一个组件赋予路由对象 hoc
// withRouter本质是一个方法 接受一个组件作为参数 返回一个新的组件
// 将路由对象 注册到新组件的props里
export default newComponent