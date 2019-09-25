<template>
  <div class='play' v-show='songlist.length'>
    <div class='fullScreen' v-if='full'>
       <div class='bg'>
         <img :src="ablbumUrl" alt="">
       </div>
        <div class='top'>
           <button @click='toggle'>v</button>
           <h3>{{currentSong.songname}}</h3>
           <h4>{{currentSong.singernames}}</h4>
        </div>
       <div class='middle'>
         <!-- play 运动 play pause 暂停 -->
          <div class='cd-wrapper ' :class='cdRun'>
            <img :src="ablbumUrl" alt="">
          </div>
       </div>
       {{currentSong}}
       <div class='bottom'>
        <audio :src='songurl' ref='audio' 
         @canplay='canplay'
         @ended="ended"
         @timeupdate='timeupdate'
         ></audio>
        <MLyric :songmid='currentSong.songmid'></MLyric>

        <MProgress :currentTime='currentTime' :allTime='allTime'
                   :jump='jump'
        ></MProgress>
        <br>
        <br>
        <br>
        <button @click='play'>play</button>
        <button @click='next("next")'>下一曲</button>
        <button @click='next("prev")'>上一曲</button>
        <!-- <button @click='jump'>jump</button> -->
       </div>

      
        <hr/>
        
    </div>
    <div class='miniScreen' v-else @click='toggle'>

    </div>
    
  </div>
</template>
<script>
// import MProgress from '../../components/m-progress'
import MProgress from 'components/m-progress'
import SongPrase from  './songPare'
import MLyric from  'components/m-lyric'
import  {ablbumUrl} from '../../base/parsedata'
import {mapGetters,mapMutations,mapState} from 'vuex'
import { stat } from 'fs'
export default {
  components:{MProgress,MLyric},
  data(){
    return{
      currentTime:0,
      allTime:0,
      playing:false//播放状态
    }
  },
  watch:{ 
    // 监听数据的改变
    currentSong(newValue,oldValue){
       console.log('当前歌曲发生改变',newValue,oldValue)
      //  歌曲信息发生改变  自动播放
    }
  },
  methods:{
    timeupdate(e){
      this.currentTime=e.target.currentTime
      console.log('播放时间',e.target.currentTime)
    },
    ended(){
        console.log('播放结束')
        // 切换下一曲播放
        this.next('next')
      },
    canplay(){
      console.log('音乐准备完毕')
       this.allTime=this.$refs.audio.duration
       this.autoPlay()
    },
    jump(time){
      let audio=this.$refs.audio
      audio.currentTime=time
      // this.autoPlay()
    },
    autoPlay(){
      // 调用该方法不做状态判断直接播放
      let audio=this.$refs.audio
      this.playing=true
      audio.play()
    },
    play(){
      let audio=this.$refs.audio

      console.log('播放状态',audio.paused)

      console.log(audio.__proto__)
      console.log(audio.duration)
      if(audio.paused){
        console.log('准备播放')
        // 歌曲播放需要下载资源 添加一个下载延时处理
        //  监听资源加载完毕
        audio.play() 
        this.playing=true   
      }else{
         audio.pause()
         this.playing=false
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
    cdRun(){
      // 控制旋转类名的计算属性
      return this.playing?'play': 'play pause'
    },
    ablbumUrl(){
      // 计算属性  封装的处理图片的方法
      return ablbumUrl(this.currentSong.albummid)
    },
    // ...mapState({songlist:state=> state.play.list}),
    ...mapState({songlist:(state)=>{return state.play.list},
                 full:(state)=>state.play.fullScreen
    }),
    ...mapGetters({currentSong:'play/currentSong'}),
    songurl(){

      let songmid=this.currentSong.songmid
      // 从当前的歌曲信息获取媒体id
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
      color: #fff;
      font-size:@fs-s;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
      background:#ccc;
      .bg{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
        position: absolute;
        z-index: -1;
        opacity: 0.9;
        filter: blur(20px);

      }
      .top{
         button{
           position: absolute;
           width: 50px;
           height: 50px;
           left: 0;
           right: 10px;
         }
         h3{height: 40px;}
         h4{height: 20px;}
        text-align: center;
      }
      .middle{
          .w(375);
          .cd-wrapper{
            margin: 20px auto;
            width: 325px;
            height: 325px;
            border-radius: 50%;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
            &.play{
                animation: rotate 20s linear infinite ;
            }
            &.pause{
              //  控制动画的播放状态  paused  running 动画
                animation-play-state: paused;
            }
          }
      }
      .bottom{

      }
    }
    .miniScreen{
       width: 100%;
       height:80px;
       background: skyblue;
       position: fixed;
       bottom: 0;
    }
    @keyframes rotate {
       from {
         transform: rotate(0deg)
       } 
       to {
         transform: rotate(360deg)
       }
    }
  }
</style>
