import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建全局状态管理的store对象
const store = new Vuex.Store({
   state:{
     num:1,
     name:'韩梅梅',
     list:[1,2,3,4]
   },
   mutations:{

     addNum(state,params){
      //  vuex 中规定 修改state的值必须通过mutations里的方法
        state.num+=params
     },
     changeName(state,params){
       state.name=params
     }
   },
   getters:{
    //  派生属性 类似于组件里的计算属性
     double(state){
        return state.num*2
     }
   },
   actions:{
     actionNum({commit},params){
       console.log('触发action',params)
      //  let commit=obj.commit
      //  let {commit} = obj
       commit('addNum',params)
     }
   }


})


export default store