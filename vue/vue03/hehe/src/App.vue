<template>
  <div >
    你好世界 {{name}}
    <!-- <hr/>
    <Banner></Banner>
    <Banner></Banner> -->
    <hr>  
    <Color></Color>
    <hr>
    <div class='hehe'>
      
    </div>
  </div>
</template>

<script>
import Color from  './components/color'
import Banner from './components/banner'
// 引入一个组件
export default{
  components:{Banner,Color},
  data(){
    return{
      name:'贞子大战伽椰子'
    }
  },
  methods: {
    
  },
  mounted() {
    console.log('挂载完成')
  },
}
</script>

<style scoped>
/* 
scoped 样式作用域 该样式只在本组件有效
 */
.hehe{
  width: 100px;
  height: 100px;
  background: red;
}
</style>
