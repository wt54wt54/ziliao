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
       this.$store.commit('addMatter',this.inputVal)
     }
   }
}
</script>
<style>

</style>
