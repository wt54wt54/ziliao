import Vue from  'vue'
import Vuex from  'vuex'
Vue.use(Vuex)
import todolist from './module/todolist'
import  shopcar from './module/shopcar'
const store = new Vuex.Store({
  modules:{
    hehe:todolist,
    // shopcar:shopcar
  }
})
// const store = new Vuex.Store({
//   state:{
//     matterList:[{matter:'明天去团建',finish:false}]
//   },
//   getters:{
//     test(){
//       return 'hehe'
//     }
//   },
//   mutations:{
//     addMatter(state,params){
//        console.log('mutationn  添加事项',params)
//        state.matterList.push({matter:params,finish:false})
//     },
//     delMatter(state,params){
//       console.log('mutationn  删除事项',params)
//       state.matterList.splice(params,1)
//    }
//   },
//   actions:{}
// })
export default store