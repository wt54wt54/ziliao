import React ,{Component} from 'react'
import Store from './store'
import ActionCreator from './actionCreator'
class Num1 extends Component{
  componentDidMount(){
    Store.subscribe(()=>{
      // 全局状态值发生改变
      this.setState({})
    })
  }
  render(){
    console.log(Store)
    console.log(Store.getState())
    let {num,name}=Store.getState()
    return(
      <div>
        <h1>num1</h1>
        {num}
        {name}
        <button onClick={()=>{
          ActionCreator.addnum()
          // 触发action下的方法
        }}>add</button>
      </div>
    )
  }
}
export default Num1