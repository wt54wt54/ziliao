<template>
  <div class="banner">
    <div class="swiper-container" ref='banner'>
      <div class="swiper-wrapper">
          <div class="swiper-slide" 
               v-for='(item,index) in list'
               :key="index"
          >
            <img :src="item.picUrl" alt="">
          </div>
     
      </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import jsonp from  'jsonp'
export default {
   data(){
     return{
       list:[]
     }
   },
   methods: {
     initSwiper(){
        this.banner = new Swiper(this.$refs.banner,{})
     }
   },
   created() {
     let url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1'
     //  param 后端要求传递回调函数的key值
     jsonp(url,{param:'jsonpCallback'},(err,data)=>{
       console.log(err,data)
       this.list = data.data.slider
       this.$nextTick(()=>{
         this.initSwiper()
       })
     })
   },
   mounted() {
    //  this.initSwiper()
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import  '../style/index.less';
@import  '../../node_modules/swiper/dist/css/swiper.min.css';
.banner{
 .w(375);
 .h(150);
 .swiper-container{
   width:100%;
   height: 100%;
   img{
     width: 100%;
     height: 100%;
   }
 }
}
</style>
