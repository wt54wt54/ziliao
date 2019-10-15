import React ,{Component} from 'react'
import Store from './store'
class Num1 extends Component{
  render(){
    console.log(Store)
    console.log(Store.getState())
    let {num,name}=Store.getState()
    return(
      <div>
        <h1>num1</h1>
        {num}
        {name}
      </div>
    )
  }
}
export default Num1