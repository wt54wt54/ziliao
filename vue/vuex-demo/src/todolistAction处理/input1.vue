<template>
  <div id="app">
     <input type="text" v-model="inputVal">
     <button @click="add">添加</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      inputVal : ''
    }
  },
   methods:{
     add(){
       this.$store.dispatch('addAction',this.inputVal)
      // this.$store.commit('addMatter',123)
      // this.$store.commit('chagneName','13123')
      // this.$store.commit('chagneNum',1)
     }
   }
}
</script>
<style>

</style>
