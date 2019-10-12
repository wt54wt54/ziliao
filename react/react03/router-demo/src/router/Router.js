import React ,{Component,Fragment} from 'react'
import  {HashRouter,BrowserRouter,Link,Route,Redirect,Switch,NavLink} from 'react-router-dom'
import './index.css'
function Home(props){
  console.log(props)
  return(
    <div>
      这里是首页
      <button onClick={()=>{
         // query 在地址栏的后方传递路径
        // props.history.replace('/login?us=123&ps=456')
        // params
        // 一般只用于动态导航  在路由对象里的 match 接受
        props.history.push('/login/123')
        // state 以对象的形式传递数据 不会出现在地址栏
        // props.history.push({pathname:'/login',state:{us:123,ps:456}})
      }}>goLogin</button>
    </div>
  )
}
function Login(props){
  console.log('登录组件',props)
  return(
    <div>
      这里是login 组件
    </div>
  )
}
// 编程式导航 必须要有路由对象  被Route组件处理过的才有路由对象

class Router extends Component{
  render(){
    console.log('Router',this)
    return(
      // <div className='router'>
      //    heheda 
      // </div>
      <Fragment>
        {/* <Home></Home> */}
        <BrowserRouter>
  
          {/* <Route path='/home' render={(props)=>{
            console.log(props)
            console.log(this,'home')
            return(
              <div>
                这里是首页
              </div>
            )
          }}></Route>        */}
          <Route path='/home' component={Home}></Route> 
          <Route path='/login/:id' component={Login}></Route> 
        </BrowserRouter>
      </Fragment>
    )
  }
}
export default Router