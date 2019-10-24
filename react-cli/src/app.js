import React ,{Component} from 'react'
import Login from  './component/login'
import  './style/index.less'
class App extends  Component{
  render(){
    return(
      <div className='app'>
        这里是测试webpackhehehehe
        <hr/>
        <Login></Login>
      </div>
    )
  }
}
export default App