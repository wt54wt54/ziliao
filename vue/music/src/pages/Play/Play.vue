<template>
  <div class='play' v-show='songlist.length'>
    <div class='fullScreen' v-if='full'>
        <button @click='toggle'>v</button>
        <audio :src='songurl' controls ref='audio'></audio>
        <hr/>
        <button @click='play'>play</button>
        <button @click='next("next")'>下一曲</button>
        <button @click='next("prev")'>上一曲</button>
    </div>
    <div class='miniScreen' v-else @click='toggle'>

    </div>
    
  </div>
</template>
<script>
import SongPrase from  './songPare'
import {mapGetters,mapMutations,mapState} from 'vuex'
import { stat } from 'fs'
export default {
  data(){
    return{
    }
  },
  methods:{
    play(){
      let audio=this.$refs.audio
      console.log('播放状态',audio.paused)
      
      audio.onended=()=>{
        console.log('播放结束')
        // 切换下一曲播放
      }

      if(audio.paused){
         audio.play()
      }else{
         audio.pause()
      }
  

    },
    ...mapMutations({next:'play/changeCurrentIndex',
                     toggle:'play/changeFullScreen'
    }),
    // next(){
    //   this.$store.commit('play/changeCurrentIndex')
    // }
  },
  computed:{
    // ...mapState({songlist:state=> state.play.list}),
    ...mapState({songlist:(state)=>{return state.play.list},
                 full:(state)=>state.play.fullScreen
    }),
    ...mapGetters(['play/currentSongUrl']),
    songurl(){

      let songmid=this['play/currentSongUrl']
      return SongPrase.songUrl(songmid)
    }
  },
  mounted(){
    console.log(this.$refs.audio.__proto__)
    //  console.log(this.$store)
  }
/*
(state)=>{return state.xxx.xxx} => state => state.xxx.xxx
播放音乐
切换时机 展开收起
页面的渲染 
   按钮
   titile   
   name   
   img 
      圆角边框
      旋转  跟随 音乐状态
   歌词
      播放
      根据音乐状态
   进度条
      显示  总时间  当前时间  百分比
      操作  点击 拖动   控制歌曲播放
   工具条  
      播放 前一曲 下一曲  
      循环 单曲 随机  列表循环  -> 播放列表
      收藏  调用接口

*/ 
}
</script>
<style lang="less" scoped>
  @import  '../../style/index.less';
  .play{
    
    // background: red;
    .fullScreen{
       position: fixed;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
      background: red;
    }
    .miniScreen{
       width: 100%;
       height:80px;
       background: skyblue;
       position: fixed;
       bottom: 0;
    }
  }
</style>
