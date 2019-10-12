import React ,{Component,Fragment} from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import './index.css'

class Router extends Component{
  render(){
    <HashRouter>
      <hr/>
      <Switch>
        <Redirect exact from = '/' to = '/home'></Redirect>
        <Route path='/home' component={Home}></Route>
        <Route path='/login' component={Login}></Route>
      </Switch>
    </HashRouter>
    
  }
}
export default Router