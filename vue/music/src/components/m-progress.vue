<template>
  <div class='progress' >
    <span>{{time|hehe(':')}}</span>
    <!-- 要处理的数据|过滤器的名 -->
     <div class='progress-wrapper'
          ref='progressWrapper'     
     >
     <!-- 黑色背景 -->
        <div ref='progressContent' class='progress-content'></div>
        <!-- 黄条 -->
        <!-- 小圆点 -->
        <div class='dot' ref='dot'
          @touchstart='touchstart'
          @touchmove ='touchmove'
          @touchend='touchend'
         > 
          <div>
          </div>
        </div>
     </div>
     
     <span>{{allTime|hehe(":")}}</span>
     <!-- {{precent}} -->
     <button @click='move'>jump</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      touching:false,
      time:0
    }
  },
  props:['currentTime','allTime','jump'],
  filters:{
     hehe(data,tag){
      //  过滤器的第一个参数 就是要处理的数据
       var tag=tag||':'
      //  console.log('过滤器的参数',data)
       let m=parseInt(data/60)<=9?'0'+parseInt(data/60) :parseInt(data/60)
       let s=parseInt(data%60)<=9?'0'+parseInt(data%60):parseInt(data%60)
       return `${m}${tag}${s}`   
     }
  },
  mounted(){
    this.touch={}
    // 按下移动的相关数据
  },
  methods:{
    offset(width){
      //  移动进度条
      // console.log(2222)
      this.$refs.progressContent.style.width=width+'px'
      // 移动小圆球
      this.$refs.dot.style.transform=`translate3d(${width}px,0,0)`
 
    },
    touchstart(e){
      // console.log('按下',e)
      this.touching=true
      this.touch.startDistance=this.$refs.progressContent.clientWidth 
      // 记录起始位置
      this.touch.startX = e.touches[0].pageX
    },
    touchmove(e){

      let distance =e.touches[0].pageX-this.touch.startX // 计算移动多少距离
      //  console.log('移动',distance)
      distance+=this.touch.startDistance
      // 边界判断 
      if(distance>=0&&distance<= this.$refs.progressWrapper.clientWidth){
         this.offset(distance)
         this.time=this.allTime*(distance/this.$refs.progressWrapper.clientWidth)
         
      }
     
    },
    touchend(){
      this.jump(this.time)
      this.touching=false
    },
    move(){
      let time=100
      this.jump(100)
      // 调用父组件传递的方法
    }
  },
  watch:{
    currentTime(newTime,oldTime){
      console.log('时间改变') 
      if(this.touching){
        return false
      }
      this.time=newTime
       //修改进度条的位置
       let precent=newTime/this.allTime
       let width=this.$refs.progressWrapper.clientWidth*precent
 
       
       this.offset(width)
       //修改小圆点的位置 
    }
  },
  computed:{
    precent(){
      return (this.currentTime/this.allTime *100)+'%'
    }
  }
/*
1.显示进度
  a显示当前时间
  b.显示总时间
  c.显示百分比
2. 修改进度  控制歌曲的播放

*/ 
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
// 别名的使用 js 中直接用 style中需要添加一个~
.progress{
  .w(375);
  .h(50);
  display: flex;
  justify-content: space-around; 
  align-items: center;
  .progress-wrapper{
    
    background: rgba(0,0,0,.3);
    height: 4px;
    .w(240);
     position: relative;
     .progress-content{
       position: absolute;
       left: 0;
       height: 4px;
  
       background: yellow;
     }
     .dot{
        position: absolute;
        left: 0;
        top: -4px;
        width: 16px;
        height: 16px;
        border-radius:50%; 
        background: skyblue;
        display: flex;
        align-items: center;
        justify-content: center;
        div{

          width: 10px;
          height: 10px;
          background: yellow;
          border-radius:50%; 
        }
     }
  }

}
</style>