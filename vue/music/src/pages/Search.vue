<template>
  <div class="home">
   这里是搜索
   <!-- <img src="/loading.gif" alt="">
   <hr>
   <img src="../assets/loading.gif" alt=""> -->
   <img :src='publicimg' alt="">
   <hr>
   <img :src='assets' alt="">
  </div>
</template>

<script>

import img from  '../assets/loading.gif'
export default {
 data(){
   return{
     publicimg:'/loading.gif',
     assets:img
   }
 }
}
/*
vue 中的图片
1.public   用绝对路径/ 使用 正常http请求
2.assets   用相对路径  base64
使用变量 
public 不受影响
assets  不能写路径  将图片通过 import进行引入

*/ 
</script>
