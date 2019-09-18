<template>
  <div>
    <h4>box</h4>
    <!-- <Demo></Demo> -->
    <Num1></Num1>
    <hr>
    <Num2></Num2>
  </div>
</template>
<script>
import Demo from  './transition/demo2'
import Num1 from  './vuexdemo/num1'
import Num2 from  './vuexdemo/num2'
export default {
   components:{Num1,Num2}
}
</script>