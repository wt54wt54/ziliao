import React ,{Component} from 'react'
import Store from './store'
import ActionCreator from './actionCreator'
class Num2 extends Component{
  componentDidMount(){
    Store.subscribe(()=>{
      this.setState({})
    })
  }
  render(){
    let {num,name}=Store.getState()
    return(
      <div>
        <h1>num2</h1>
        {num}
        {name}
       <button onClick={()=>{
         ActionCreator.changeName('韩梅梅')
       }}>改名</button>
      </div>
    )
  }
}
export default Num2