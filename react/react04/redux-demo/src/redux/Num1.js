import React ,{Component} from 'react'
import {connect} from 'react-redux'
import ActionCreator from './actionCreator'
import {bindActionCreators}from 'redux'
class Num1 extends Component{

  render(){
    console.log(this,'num1')
    let {num,name}=this.props
    return(
      <div>
        <h1>num1</h1>
        {num}
        {name}
        <button onClick={()=>{
          this.props.addnum()
          // ActionCreator.addnum()
          // 触发action下的方法
        }}>add</button>
      </div>
    )
  }
}
// 将全局的props值映射到props上
// 接受全局状态值 并且return  将return 的值放到props里
let mapStateToProps=(state)=>{
   console.log('mapStateToProps')
   return state
}
// 也是一个函数 可以接受dispath
// return 对象
let mapDispathToprops=(dispatch)=>{
    // return{
    //   hehe(){
    //     let action=ActionCreator.addnum()
    //     console.log('hehe')
    //     dispatch(action)
    //   },
    // }
    return bindActionCreators(ActionCreator,dispatch)

}
// export default connect(mapStateToProps)(Num1)
export default connect(state=>state,mapDispathToprops)(Num1)