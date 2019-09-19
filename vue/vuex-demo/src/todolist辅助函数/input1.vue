<template>
  <div id="app">
     <input type="text" v-model="inputVal">
     <button @click="addAction(this.inputVal)">添加</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      inputVal : ''
    }
  },
   methods:{
     ...mapActions(['addAction'])
    //  add(){
    //    this.$store.dispatch('addAction',this.inputVal)
     
    //  }
   }
}
</script>
<style>

</style>
