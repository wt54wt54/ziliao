import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from  './components/Login.vue'
import Reg from  './components/Reg.vue'
import Recommend from './components/Recommend'
import Rank from  './components/Rank'
import Singer from './components/Singer'

const router = new Router({
   mode:"history",
   routes:[
     {
       path:'/login',component:Login,name:'login'
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