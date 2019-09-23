<template>
  <div id="app">
    <MHeader></MHeader>
    <MNav></MNav>
    <router-view></router-view>
    <Play></Play>
  </div>
</template>
<script>
import Play from  './pages/Play/Play'
import MHeader from './components/m-header.vue'
import MNav from  './components/m-nav.vue'
export default {
   components:{MHeader,MNav,Play}
}
</script>
<style lang="less">

</style>
