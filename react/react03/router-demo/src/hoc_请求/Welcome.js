import React ,{Component,Fragment} from 'react'
import hoc from './hoc' //hoc 函数方法
class Welcome extends Component{
 
  render(){
    console.log(this,'欢迎组件')
    return(
        <div className='welcome'>
          欢迎：{this.props.name}
        </div>
      )
   
  }
}
// 将要处理的组件传给高阶  获取新组件
let Hehe =hoc(Welcome)
export default Hehe