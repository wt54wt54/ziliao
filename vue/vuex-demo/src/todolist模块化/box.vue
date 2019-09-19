<template>
  <div id="app">
    <Input></Input>
    <List></List>
  </div>
</template>

<script>
import Input from  './input'
import  List from  './list'
export default {
  components:{Input,List},
  mounted() {
    console.log(this.$store)
  },
}
</script>
<style>

</style>
