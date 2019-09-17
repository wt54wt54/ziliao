<template>
  <div class="singer">
    <!-- computed:{{test}}
    <hr/>
    data:{{num}}
    {{indexList}} -->
    <!-- <button @click='add'>add</button> -->
    <!-- 歌手列表 -->
    <div class='singer-wrapper' ref='bs'>
      <ul class='singer-list'>

        <li v-for='(item,index) in list'
          :key='index'
          :ref='item.title'
        >
        <!-- 用索引通过ref绑定元素 -->
        <h5>{{item.title}}</h5>
        <ol class='singer-items'>
          <li v-for='(singer,sindex) in item.items'
              :key='sindex'
          >
            <div class='img-box'>
              <img v-lazy="singer.avator" alt="">
            </div>
            <span>{{singer.Fsinger_name}}</span>
          </li>
        </ol>
        </li>
      </ul>
    </div>
    <!-- 索引列表 -->
    <ul class='indexlist'>
      <li v-for ='(item,index) in indexList'
          :class='item===selIndex?"selClass":""'
          :key='index'
          @click="sel(item)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>

import  jsonp from  'jsonp'
import {parseData} from  './parsedata'
import BS from 'better-scroll'
export default {
  data(){
    return{
      list:[],
      num:1,
      selIndex:'hot'//选中的索引
    }
  },
  computed: {
    // 计算属性
    indexList(){
      let arr=[]
      for (let index = 0; index < this.list.length; index++) {
         arr.push(this.list[index].title)
        
      }
      return  arr
    },
     test(){
      //   数据的处理
      return  this.num*2
     }
  },
  methods: {
    sel(item){
      // item点击到的索引
      this.selIndex=item
      // 改变选中夜色
      console.log(this.$refs[item][0])
      let el=this.$refs[item][0] 
      //根据指定索引获取获取指定的元素
      this.bs.scrollToElement(el)
      // bs内置方法 滚动到某一元素
    },
    add(){
      this.num++
    },
    initData(){
      // 获取数据
      let url='https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
      jsonp(url,{param:'jsonpCallback'},(err,data)=>{
        this.list =parseData(data.data.list)
       
      }) 
    },
    initBS(){
      this.bs = new BS(this.$refs.bs)
    }
  },
  created() {
    this.initData()
  },
  mounted() {
    this.initBS()
    console.log(this.$refs)
  },
}
/*
indexlist
1.获取数据 v
2.处理数据 v
3.根据数据渲染界面 v 左边歌手列表  v 右边的索引列表 v
4.歌手列表可以滚动 v
5.歌手滚动 索引列表随动
6.点击索引歌手列表岁随动
7、滑动  歌手列表随动

computed  计算属性
和data里的数据进行绑定 可以和data一样使用
data发生改变计算属性同样发生改变
A  B  C  D  E  F F

      2  45PX 3   5
*/ 
</script>
<style lang="less" scoped>
@import '../../style/index.less';
.singer{
  position: fixed;
  .top(88);
  .bottom(0);
  .w(375);
  background: pink;
  .singer-wrapper{
     height: 100%;
     overflow: hidden;
     .test();
    .singer-list{
      .singer-items{
        
        li{
          display: flex;
          font-size: @fs-s;
          .img-box{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
         
        }
      }
    }
  }
  .indexlist{
    position: absolute;
    top:10px;
    right: 10px;
    font-size: @fs-xs;
    .selClass{
      color:red;
    }
  }
}
  
</style>
