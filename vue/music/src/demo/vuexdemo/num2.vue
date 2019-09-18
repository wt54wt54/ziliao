<template>
  <div>
   这是组件2
   {{this.$store.state.num}}
   {{this.$store.state.name}}
    {{this.$store.getters.double}}
   <button @click='changename'>改名</button> 
  </div>
</template>
<script>
export default {
  methods: {
    changename(){
      this.$store.commit('changeName','李雷')
    }
  },
 mounted() {
    console.log('num2',this.$store)
  },
}
</script>
<style lang="less" scoped>

</style>