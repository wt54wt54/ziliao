import { stat } from "fs";

export default{
  namespaced:true,
  state:{
    fullScreen:true, //全屏 小屏切换
    currentIndex:-1,
    sequence:0,  // 0顺序播放  1 单曲循环 2随机播放
    list:[] 
  },
  getters:{
    currentSongUrl(state){
      console.log(state.list,state.currentIndex,'getters')
      return state.list[state.currentIndex].musicData.songmid
    }
  },
  mutations:{
    changeFullScreen(state){
      state.fullScreen=!state.fullScreen
    },
    setCurrentIndex(state,index){
      state.currentIndex=index
    },
    setList(state,params){
      state.list=params
    },
    changeCurrentIndex(state,params){
      switch (params) {
        case 'next':
          //   最后一曲的边界条件  下标和长度差1
            if(state.currentIndex<state.list.length-1){
              state.currentIndex++
            }else{
              state.currentIndex=0
            }
          break;
          case 'prev':
              //   最后一曲的边界条件  下标和长度差1
                if(state.currentIndex==0){
                  state.currentIndex=state.list.length-1
                }else{
                  state.currentIndex--
                }
              break;
        default:
          break;
      }
      //当前歌曲的下标可能向前 前一曲  可能向后 后一曲 随机  随机播放
   
    }
  },
  actions:{}
}