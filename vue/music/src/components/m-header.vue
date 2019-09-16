<template>
  <div class="m-header">
    这里是头部
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import '../style/index.less';

.m-header{
  .w(375);
  background: @bc-black;
  .h(44);
  font-size: @fs-l;
  color:@fc-yellow;
  text-align: center;
  .l_h(44);
}
</style>
