import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from  './components/Login.vue'
import Reg from  './components/Reg.vue'
import Recommend from './components/Recommend'
import Rank from  './components/Rank'
import Singer from './components/Singer'
import  My from  './components/My'
import Info from  './components/Info'
const router = new Router({
   mode:"history",

   routes:[
     {
       path:'/login/:id/:xixi',component:Login,name:'login'
     },{
      path:'/reg',component:Reg ,name:'reg'
     },
     {
      path:'/rank',component:Rank,name:'rank'
     },
     {
      path:'/recommend',component:Recommend,name:'recommend'
     },
     {
      path:'/singer',component:Singer  ,name:'singer'
     },
     {
      path:'/my',
      component:My,
      name:'my',
      children:[
        {path:'login',component:Login},
        {path:'info',component:Info}
      ]
     },
     {
      path:'/manyView',components:{
        default:Login,
        a:Recommend,
        b:Singer
      }
     },
     {
       path:'/',redirect:'/recommend'
     },
     
   ]
})

export default  router