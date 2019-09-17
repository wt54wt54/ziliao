<template>
 <div class='bs'>
   <div class='warpper' ref='bs'>
      <ul>
        <li v-for='item in 30'>{{item}}</li>
      </ul>
   </div>
 </div>
</template>

<script>
import  BS from  'better-scroll'


export default {
  mounted() {
    this.bs=new BS(this.$refs.bs)
  },
}
/*
1. 引入 
2. 创建dom结构    
<div>
  <div></div> 
  <div>
</div>
3.实例化 new BS(DOM)
视图层的高度 要固定一定要大于滚动层
*/ 
</script>
<style lang="less" scoped>
@import '../../style/index.less';
.bs{
  position: fixed;
  .top(88);
  .bottom(0);
   .w(375);
   background: red;
   .warpper{
     overflow: hidden;
     .w(375);
     height: 100%;
     background: pink;
   }
}
  
</style>
