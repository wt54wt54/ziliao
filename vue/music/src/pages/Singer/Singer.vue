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
    <ul class='indexlist'
      ref='indexlist'
      @touchstart.stop="touchstart"
      @touchmove.stop='touchmove'
      @touchend.stop='touchend'
    >
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
    // 移动的touch事件
    touchstart(e){

      let y = e.touches[0].clientY-(this.$refs.indexlist.offsetTop + 88)
      // 点击位置距离  ul 顶部的坐标
      let startIndex =Math.ceil(y/20)
      this.touchs.startY=y
      this.touchs.startIndex = startIndex

      console.log('触摸',this.touchs)
    },
    touchmove(e){
       let {startY}=this.touchs
       let moveY =e.touches[0].clientY-98
       let distance = moveY-startY
       //  移动过的距离
       let moveNum = Math.ceil(distance/20)
       //   移动过的个数
       let indexAll =this.touchs.startIndex+moveNum 
       //   从头开始移动的总格数  1-n  22
      //   超出的边界判断
       if( indexAll<=0 || indexAll>this.indexList.length){
         return false
       }
       let findx = this.indexList[indexAll-1] 
       // 获取移动的格子的字母
       this.move(findx)
      console.log('移动',indexAll,this.touchs.startIndex,moveNum)
    },
    touchend(e){
      console.log(e)
      // 边界处理
      console.log('抬起')
    },
    move(item){
      this.selIndex=item
      let el=this.$refs[item][0]
      this.bs.scrollToElement(el)
      //根据指定索引获取获取指定的元素
      // bs内置方法 滚动到某一元素
    },
    sel(item){
      // item点击到的索引
      this.selIndex=item
      // 改变选中夜色
      this.move(item)
      
    },
    add(){
      this.num++
    },
    // 获取滚动栏的尺寸数据
    getHeightArr(){
      let arr=[0]
      let els = this.$refs
      for (const key in els) {
        if (key!== 'bs'&&key!=='indexlist'&& key!=='hot') {
          arr.push(els[key][0].offsetTop)
          
        }
      }
      console.log(arr)
      return arr
    },
    initData(){
      // 获取数据
      let url='https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
      jsonp(url,{param:'jsonpCallback'},(err,data)=>{
        this.list =parseData(data.data.list)
        this.$nextTick(()=>{
          this.getHeightArr()
        })
      }) 
    },
    initBS(){
      this.bs = new BS(this.$refs.bs,{probeType:3})
      this.bs.on('scroll',(pos)=>{
        let arr=this.getHeightArr()
        let y = Math.abs(pos.y)
        for (let index = 0; index < arr.length; index++) {
            if(y>=arr[index]&&y<arr[index+1]){
              //满足尺寸 
              let findex =this.indexList[index]
              // console.log(findex)
              this.selIndex=findex
            }
          
        }
        // console.log(pos)
      })
    }
  },
  created() {
    this.initData()
  },
  mounted() {
    this.touchs={}
    this.initBS()
    console.log(this.$refs)
  },
}
/*
indexlist
1.获取数据 v
2.处理数据 v
3.根据数据渲染界面 v 左边歌手列表  v 右边的索引列表 v
   右边滚动 
   左边随动
   |
   v
   scrollToElement()
   v
   标记元素 下标
   v
   找下标  A B C D 
   v 
   [a,b,c,d]  数组的索引下标  0  1
   v
   右侧侧边栏划过的格子数
   v
   点击位置的格数  
   移动过的格子数
   v
   总格数 -  1 数组下标
4.歌手列表可以滚动 v
5.歌手滚动 索引列表随动
6.点击索引歌手列表岁随动
7、滑动  歌手列表随动

computed  计算属性
和data里的数据进行绑定 可以和data一样使用
data发生改变计算属性同样发生改变
A  B  C  D  E  F F

      2  45PX 3   5

[a,b,c,d,e,f]

[0,100,200,300]

50   0
120  1
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
    background: yellowgreen;
    position: absolute;
    top:10px;
    right: 10px;
    font-size: @fs-xs;
    li{
      height: 20px;
      background: purple;
    }
    .selClass{
      color:red;
    }
  }
}
  
</style>
