<template>
  <div class="m-nav">
    <ul>
      <router-link tag='li' active-class='active' to="/recommend">推荐</router-link>
      <router-link tag='li' active-class='active' to="/singer">歌手</router-link>
      <router-link tag='li' active-class='active' to="/rank">排行</router-link>
      <router-link tag='li' active-class='active' to="/search">搜索</router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import '../style/index.less';
.m-nav{
  background: @bc-black;
  ul{
  
    display: flex;
    li{
      flex:1;
      color: @fc-white5;
      font-size: @fs-m;
      text-align: center;
      .h(44);
      .l_h(44);
    }
    .active{
      color: @fc-yellow;
    }
  }
}
</style>
