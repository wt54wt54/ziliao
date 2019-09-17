import Vue from 'vue'
import Router from 'vue-router'

import  Recommend from  './pages/Recommend'
import Singer from  './pages/Singer/Singer.vue'
import Rank from  './pages/Rank'
import Search from  './pages/Search'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/recommend',component:Recommend},
    { path:'/singer',component:Singer},
    { path:'/rank',component:Rank},
    { path:'/search',component:Search},
    { path:'/',redirect:'/recommend'}
  ]
})
