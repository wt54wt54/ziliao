<template>
  <div class="swiper-container" ref='banner'>
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
  </div>
</template>
<script>
import  Swiper from 'swiper'
// es6 第三方模块引入
// const Swiper = require('swiper')
export default {
  methods: {
    initBanner(){
      new Swiper(this.$refs.banner,{}) 
    }
  },
  mounted() {
    this.initBanner()
  },
}
</script>
<style >
@import '../../node_modules/swiper/dist/css/swiper.css';
 /*引入css样式  */
</style>