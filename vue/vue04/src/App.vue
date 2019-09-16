<template>
  <div id="app">
    <h3>这里是app</h3>
    <NavCustom></NavCustom>
    <!-- <ul>  
      <router-link active-class='hehe' tag='li' to = '/login'>登录</router-link>
      <router-link active-class='hehe' tag='li' to = '/reg'>注册</router-link>
      <router-link active-class='hehe' tag='li' to = '/recommend'>推荐</router-link>
      <router-link active-class='hehe' tag='li' to = '/singer'>歌手</router-link>
      <router-link active-class='hehe' tag='li' to = '/rank'>排行</router-link>
    </ul> -->
       
     <hr/>
    <router-view ></router-view>
    <!-- <hr>
    <router-view name='a'></router-view>
    <hr>
    <router-view name='b'></router-view> -->
  </div>
</template>

<script>
import NavCustom from  './components/NavCustom'

export default {
  components:{NavCustom}

}
</script>

<style>
#app{}
ul{
  display: flex;
  list-style: none;
}
.hehe{
  background: red;
}
</style>
