<template>
  <div>
   这是组件1
   {{this.$store.state.num}}
   {{this.$store.state.name}}
     {{this.$store.getters.double}}
   <button @click='add'>add</button>
  </div>
</template>
<script>
export default {
  methods: {
    add(){
      // this.$store.commit('addNum',5)
      this.$store.dispatch('actionNum',5)
    }
  },
  mounted() {
    console.log('num1',this.$store)
  },
}
</script>
<style lang="less" scoped>

</style>