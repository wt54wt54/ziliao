<template>
  <div class="recommend">
    <div class = 'content'>
      <div>
        banner
      </div>
      <ul>
        <li v-for='(item,index) in 100'
            :key='index'
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from  'axios'

export default {
  created() {
    let url='/hehe/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.07173379566119986'
   Axios.get(url)
   .then((data)=>{
     console.log(data)
   }) 
  },
}
</script>
<style lang="less" scoped>
@import '../style/index.less';
.recommend{
 .w(375);
 .top(88);
 .bottom(0);
 position: fixed;
 .test();
 overflow: scroll;
 .content{
   
 }
}
</style>
