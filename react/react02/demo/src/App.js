import React,{Component} from 'react'
import Son from  './Son'
class App extends Component{
  constructor(){
    super()
    // 继承 执行父类的构造函数
    console.log(this)
    this.state={
      num:1
    }
  }
  add=()=>{
    console.log(this)
    let num=++this.state.num
    this.setState({num})
  }
  render(){
    return(
      <div>
        {/* <button onClick={()=>{
          let num=++this.state.num
          this.setState({num})
        }}>add</button> */}
        <button onClick={this.add}>add</button>
        hehe{this.state.num}
        <hr/>
        <Son></Son>
      </div>
    )
  }
}

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         呵呵
//       </div>
//     )
//   }
// }
// 类组件 用类创建的组件
// class App extends Component{
//   render(){
//     return(
//       <div>
//         呵呵
//       </div>
//     )
//   }
// }
// 函数组件
// function App(){
//   return(
//     <div>
//        这里是函数组件
//     </div>
//   )
// }
export default  App