<template>
  <div class="m-lyric">
      {{txt}}
  </div>
</template>

<script>
import {Base64} from  'js-base64';
import Lyric from 'lyric-parser'
export default {
  data(){
    return{
      txt:'暂无歌词'
    }
  },
  props:['songmid'],
  methods:{
    getLyricData(){
      var songmid=this.songmid||'003NGKTc2tabpb'
      let url=`/hehe/music/api/lyric?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&songmid=${songmid}&platform=yqq&hostUin=0&needNewCode=0&categoryId=10000000&pcachetime=1569383997123`
      this.$axios.get(url)
      .then((data)=>{
        console.log(data)
        let lyricstring=Base64.decode(data.lyric)
        // 歌词格式的字符串
        console.log(lyricstring)
        this.lyricObj=new Lyric(lyricstring,(params)=>{
          console.log('歌词播放',params)
          this.txt=params.txt

        })
        this.lyricObj.play()
        // stop  toggle  seek(time)
        console.log(this.lyricObj)
      })
   }
  },
  watch:{
    songmid(newmid,oldmid){
      if(newmid===oldmid) return false 
      this.getLyricData()
    }
  },
  created(){
    
  }
   
}
</script>

<style scoped lang="less">
@import '~style/index.less';

</style>
