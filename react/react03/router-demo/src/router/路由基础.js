import React ,{Component,Fragment} from 'react'
import  {HashRouter,BrowserRouter,Link,Route,Redirect,Switch,NavLink} from 'react-router-dom'
import './index.css'
function Home(){
  return(
    <div>
      这里是首页
    </div>
  )
}
function HomeHehe(){
  return(
    <div>
      这里是首页hehe
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
function Notfind(){
  return(
    <div>
      你的页面打了样
    </div>
  )
}
function UserInfo(){
  return(
    <div>
     个人信息
    </div>
  )
}
function UserReg(){
  return(
    <div>
     个人注册
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
          {/* <Link to='/home'>首页</Link>
          <Link to='/login'>Login</Link> */}
           <NavLink exact to='/home' activeClassName='sel'>首页</NavLink>
           <NavLink exact to='/home/hehe' activeClassName='sel'>首页hehe</NavLink>
           <NavLink exact to='/login' activeClassName='sel'>Login</NavLink>
           {/* 精准匹配  url地址栏和路径完全相同才满足 */}
           <NavLink exact to='/login/123' activeClassName='sel'>动态路由</NavLink>

           <NavLink exact to='/my' activeClassName='sel'>我的</NavLink>
          <hr/>
         <Switch>
          <Redirect exact from='/' to='/home'></Redirect>
          <Route  exact path='/home' component={Home}></Route>
          <Route  exact path='/home/hehe' component={HomeHehe}></Route>
          <Route  exact path='/login' component={Login}></Route>
          {/* 嵌套路由 Route 里 套Route  外层路由不能加精准匹配 */}
          <Route   path='/my' render={()=>{
            return(
              <div>
                <h4>这里我的组件</h4>
                <Route path='/my/userinfo' component={UserInfo}></Route>
                <Route path='/my/userReg' component={UserReg}></Route>
              </div>
            )
          }}></Route>
          {/* 动态路由动态导航 */}
          <Route  exact path='/login/:id' render={()=>{
            return(
              <div>
                这里是动态路由
              </div>
            )
          }}></Route>
          {/* <Route  component={Notfind}></Route> */}
          {/* 通过render渲染组件和 component 效果类似 */}
          <Route render={()=>{
            return(
              <div>
                这里是render的组件
              </div>
            )
          }}></Route>
        </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}
export default Router