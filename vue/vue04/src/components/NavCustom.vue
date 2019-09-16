<template>
  <div class="nav">
    <ul>
      <li @click="jump('login')" >登录</li>
      <li @click="jump('reg')" >注册</li>
      <li @click="jump('recommend')" >推荐</li>
      <li @click="jump('singer')" >歌手</li>
      <li @click="jump('rank')" >排行</li>
    </ul> 
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
  methods: {
    jump(params){
      console.log(this)
      // this.$router.push(path)
      //  this.$router.replace(path)
      // this.$router.push({path:path})
      // this.$router.push({name:'login',query:{us:123,ps:456}})
      this.$router.push({name:'login',params:{us:123,ps:456}})
      // this.$router.push({path:'/login/hehe/adb/123/4556/sdfsdf/sdfsdf/sdfs'})
    },
    back(){
      // this.$router.go(-1)
      // this.$router.back()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  display: flex;
  list-style: none;
}
</style>
