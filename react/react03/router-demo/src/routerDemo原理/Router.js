import React ,{Component} from 'react'
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
  constructor(){
    super()
    this.state={
      path:'/'
    }
  }
  componentDidMount(){
    //监听hash 值改变
    window.addEventListener('hashchange',this.hashChange)
    // window.onhashchange
  }
  hashChange=(e)=>{
    let path=e.newURL.split('#')[1]
    console.log('hahs 改变',e,path)
    this.setState({path:path})
  }
  jump=(path)=>{
    window.location.hash=path
    // this.setState({path})
  }
  render(){
    return(
      <div>
       这里是路由组件
       <hr/>  
       {this.state.path==='/home'?<Home></Home>:''}     
       {this.state.path==='/login'?<Login></Login>:''}   
       <hr/>
       <ul>
         <li onClick={this.jump.bind(this,'/home')}>首页</li>
         <li onClick={this.jump.bind(this,'/login')}>登录</li>
       </ul>       
      </div>
    )
  }
}
export default Router