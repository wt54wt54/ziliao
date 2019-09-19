<template>
  <div id="app">
   <ul>
     <li v-for ="(item,index) in list"
        :key='index'
     >
       <span>{{item.matter}}</span>
       <button @click="del(index)">del</button>
       <span v-if='item.finish'>已完成</span>
       <button v-else>完成</button>
     </li>
   </ul>
   
  </div>
</template>
<script>
export default {
  methods:{
    del(index){
      this.$store.commit('delMatter',index)
    }
  },
   computed:{
     list(){
       return this.$store.state.hehe.matterList
     }
   }
}
</script>
<style>

</style>
