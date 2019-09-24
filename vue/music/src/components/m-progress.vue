<template>
  <div class='progress'>
    <!-- <span>{{currentTime|hehe(':')}}</span> -->
    <!-- 要处理的数据|过滤器的名 -->
     <div class='progress-wrapper'
          @touchstart='touchstart'
          @touchMove='touchmove'
     >
        <div :style="{width:precent}" class='progress-content'></div>
        <div class='dot'>
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
  props:['currentTime','allTime','jump'],
  filters:{
     hehe(data,tag){
      //  过滤器的第一个参数 就是要处理的数据
       var tag=tag||':'
       console.log('过滤器的参数',data)
       let m=parseInt(data/60)<=9?'0'+parseInt(data/60) :parseInt(data/60)
       let s=parseInt(data%60)<=9?'0'+parseInt(data%60):parseInt(data%60)
       return `${m}${tag}${s}`   
     }
  },
  methods:{
    touchstart(e){
        // 按下事件 获取按下位置 占总位置百分比 计算按下位置的时间
      
      let width=e.target.clientWidth
      let offsetLeft = e.target.offsetLeft
      let touchX = e.targetTouches[0].pageX
      let distance =touchX-offsetLeft
      let time=(distance/width)*this.allTime
      this.jump(time)
       console.log(e,width,touchX-offsetLeft)
    },
    touchmove(){

    },
    move(){
      let time=100
      this.jump(100)
      // 调用父组件传递的方法
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