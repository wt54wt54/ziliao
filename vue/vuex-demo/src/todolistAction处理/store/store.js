import Vue from  'vue'
import Vuex from  'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    matterList:[{matter:'明天去团建',finish:false}],
    num:1,
    name:'hehe'
  },
  getters:{},
  mutations:{
    changeNum(state,params){
      state.num+=params
    },
    changeName(state,params){
      state.name=params
    },
    addMatter(state,params){
       console.log('mutationn  添加事项',params)
       state.matterList.push({matter:params,finish:false})
    },
    delMatter(state,params){
      console.log('mutationn  删除事项',params)
      state.matterList.splice(params,1)
   }
  },
  actions:{
    // 1做异步的封装处理
    // 2.同时触发多个commit的封装
    addAction({commit},params){
      // 来处理添加的异步请求
      console.log('addAction',params)
      setTimeout(()=>{
        commit('addMatter',params)
      },1000)
    },
    changeAll({commit},params){
      commit('addMatter',123)
      commit('changeNum',1)
      commit('changeName','李雷')
    } 
  }
})
export default store