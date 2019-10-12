import React ,{Component,Fragment} from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import  CustomNav from './CustomNav'
import  Home from './Login'
import Reg from './Reg'
class Router extends Component{
  render(){
    return(

      <HashRouter>
        <CustomNav ></CustomNav>
        {/* <Route render={(props)=>{
          console.log(props)
          return(
            <CustomNav hehe={props}></CustomNav>
          )
        }}></Route> */}
       
        <hr/>
        <Switch>
          <Redirect exact from = '/' to = '/home'></Redirect>
          <Route path='/home' component={Home}></Route>
          <Route path='/reg' component={Reg}></Route>
        </Switch>
      </HashRouter>
      )
    
  }
}
export default Router