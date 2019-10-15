import React ,{Component} from 'react'
import Store from './store'
class Num2 extends Component{
  render(){
    let {num,name}=Store.getState()
    return(
      <div>
        <h1>num2</h1>
        {num}
        {name}
      </div>
    )
  }
}
export default Num2