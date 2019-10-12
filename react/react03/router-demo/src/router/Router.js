import React ,{Component,Fragment} from 'react'
import  {HashRouter,BrowserRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
function Home(){
  return(
    <div>
      这里是首页
    </div>
  )
}
function Login(){
  return(
    <div>
      这里是登录
    </div>
  )
}

class Router extends Component{
  render(){
    return(
      // <div className='router'>
      //    heheda 
      // </div>
      <Fragment>
        <BrowserRouter>
          <Link to='/home'>首页</Link>
          <Link to='/login'>Login</Link>
          <hr/>
          <Route path='/home' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
        </BrowserRouter>
      </Fragment>
    )
  }
}
export default Router