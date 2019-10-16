import React ,{Component} from 'react'
import connect from '../context/connect'
import ActionCreator from './actionCreator'
class Num1 extends Component{

  render(){
    console.log(this,'num1')
    return(
      <div>
        <h1>num1</h1>
        {this.props.store.num}
        <hr/>
        {this.props.store.name}
        <button onClick={()=>{
          ActionCreator.addnum()
          // 触发action下的方法
        }}>add</button>
      </div>
    )
  }
}

export default connect(Num1)