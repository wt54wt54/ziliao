<template>
  <div>
    <!-- <transition-group name='hehe'>
        <div class='demo' v-if='state' key='1'>
          1
        </div>
        <div class='demo' v-if='state' key='2'>
          2
        </div>
    </transition-group> -->
    <transition name='hehe'>
      <div v-if='state'>
        <div class='demo'  >
          1
        </div>
        <div class='demo'  >
          2
        </div>
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
.demo{
  background: red;
  height: 100px;
  width: 100px;
}
// .hehe-enter{
//   opacity: 0;
// }
// .hehe-enter-to{
//   opacity: 1;
// }
// .hehe-enter-active{
//   transition: all 3s;
// }
// .hehe-leave{
//   opacity: 1;
// }
// .hehe-leave-to{
//   opacity: 0;
// }
// .hehe-leave-active{
//   transition: all 3s;
// }
.hehe-enter,.hehe-leave-to{
  opacity: 0;
}
.hehe-enter-active,.hehe-leave-active{
  transition: all 1s;
}
</style>