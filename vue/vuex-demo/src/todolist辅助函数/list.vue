<template>
  <div id="app">
    <!-- {{name}}{{num}} -->
    <!-- {{this.$store.getters.double}} -->
    {{double}}
    {{haha}}
   <ul>
     <li v-for ="(item,index) in hehe"
        :key='index'
     >
       <span>{{item.matter}}</span>
       <button @click="delMatter(index)">del</button>
       <span v-if='item.finish'>已完成</span>
       <button v-else>完成</button>
     </li>
   </ul>
   
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  methods:{
    del(index){
      this.$store.commit('delMatter',index)
    },
    ...mapMutations(['delMatter']),
    ...mapMutations({del:'delMatter'})
    // delMatter(){
    //   this.$store.commit('delMatter')
    // }
  },
   computed:{
     list(){
       return this.$store.state.matterList
     },
    //  ...mapState(['matterList','num','name'])
    ...mapState({hehe:state => state.matterList}),
    //  matterList(){
    //    return this.$store.state.matterList
    //  }
    ...mapGetters(['double']),
     ...mapGetters({haha:'double'})
   }
}
// (state)=>{
//   return state
// }
// state => state
</script>
<style>

</style>
