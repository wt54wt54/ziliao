import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreator from './actionCreator'
class Num2 extends Component{

  render(){
    let {num,name}=this.props
    return(
      <div>
        <h1>num2</h1>
        {num}
        {name}
       <button onClick={()=>{
         this.props.changeName('韩梅梅')
       }}>改名</button>
      </div>
    )
  }
}
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(Num2)