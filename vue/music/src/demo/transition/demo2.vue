<template>
  <div>

    <transition name='hehe'
    enter-active-class="animated rotateIn"
    leave-active-class="animated rotateOut"
    >
      <div v-if='state' class='demo'>
        1313
      </div>
    </transition>
     <button @click="toggle">toggle</button>
  </div>
</template>
<script>
export default {
   data(){
     return{
       state:true
     }
   },
   methods: {
     toggle(){
       this.state=!this.state
     }
   },
}
</script>
<style lang="less" scoped>
@import '../../../node_modules/animate.css/animate.min.css';
.demo{
  width: 100px;
  height: 100px;
  background: red;
}
</style>