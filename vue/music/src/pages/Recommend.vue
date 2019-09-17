<template>
  <div class="recommend">
    <div class = 'content'>
     <MBaner></MBaner>
     <div class='list'>
        <h3>热门推荐</h3>
        <ul>
          <li v-for='(item,index) in list'
              :key='index'
          >
            <img v-lazy="item.imgurl" alt="">
            <div class='desc'>
              <p>{{item.creator.name}}</p>
              <p>{{item.dissname}}</p>
            </div>
          </li>
        </ul>
     </div>
    </div>
  </div>
</template>

<script>
import MBaner from  '../components/m-banner'
export default {
  data(){
    return{
      list:[]
    }
  },
  components:{MBaner},
  created() {

  let url='/hehe/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.07173379566119986'
   this.$axios.get(url)
   .then((data)=>{
     console.log(data)
     this.list=data.data.list
   }) 
  },
}
</script>
<style lang="less" scoped>
@import '../style/index.less';
.recommend{
 background: @bc-black;
 .w(375);
 .top(88);
 .bottom(0);
 position: fixed;
 .test();
 overflow: scroll;
 .content{
   .list{
     h3{

     }
     ul{
       font-size: @fs-s;
       li{
         padding: 0 20px 20px 20px;
         display:flex;
         .w(335);
         .h(62);
          img{
            width: 60px;
            height: 60px;
          }
          .desc{
            padding-left:20px; 
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
       }
     }
   }
 }
}
</style>
