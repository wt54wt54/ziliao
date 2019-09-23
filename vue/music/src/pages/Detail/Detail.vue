<template>
  <div class='detail'>
    <div class='top'>
      <button @click="back">back</button>
      <h4></h4>
    </div>
    <div class='img' >
      <img :src='avator' alt="">
    </div>
    <div class='detail-list'>
       <ul>
         <li v-for='(item,index) in list' 
             :key='index'
             @click='jump(index)'
             >
             {{item.musicData.songname}}
         </li>
       </ul>
    </div>
  </div>
</template>
<script>
import jsonp from 'jsonp'
import {avatorUrl} from  '../Singer/parsedata.js'
export default {
  data(){
    return{
      avator:'',
      list:[]
    }
  },
  methods: {
    jump(index){
      this.$store.commit('play/setList',this.list)
      this.$store.commit('play/setCurrentIndex',index)
    },
    back(){
      // this.$router.back()
      this.$router.go(-1)
    },
    initList(mid){
     let url=`https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=${mid}`
     jsonp(url,{param:'jsonpCallback'},(err,data)=>{
       console.log(data)
       this.list=data.data.list
     })
    }
  },
  created() {
    let mid=this.$route.params.id
    this.initList(mid)
  },
  mounted() {
    console.log(this.$route,'详情页')
    let mid=this.$route.params.id
    this.avator=avatorUrl(mid)

  },
}
</script>
<style lang="less" scoped>
@import '../../style/index.less';
.detail{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background:greenyellow;
  .img{
    .w(375);
    .h(262.5);
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>