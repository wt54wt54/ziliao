import Vue from 'vue'
import Router from 'vue-router'

import  Recommend from  './pages/Recommend'
import Singer from  './pages/Singer/Singer.vue'
import Rank from  './pages/Rank'
import Search from  './pages/Search'
import  Detail from  './pages/Detail/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/recommend',component:Recommend},
    { path:'/singer',
      component:Singer,
      children:[
        {path:':id',component:Detail}
      ]
    },
    { path:'/rank',component:Rank},
    { path:'/search',component:Search},
    { path:'/',redirect:'/recommend'}
  ]
})
