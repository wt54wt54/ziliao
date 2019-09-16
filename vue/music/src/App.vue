<template>
  <div id="app">
    <MHeader></MHeader>
    <MNav></MNav>
    <router-view></router-view>
  </div>
</template>
<script>
import MHeader from './components/m-header.vue'
import MNav from  './components/m-nav.vue'
export default {
   components:{MHeader,MNav}
}
</script>
<style lang="less">

</style>
