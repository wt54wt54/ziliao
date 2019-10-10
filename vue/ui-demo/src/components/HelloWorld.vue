<template>
  <div class="hello">
    <span>https://shimo.im/doc/LkpdnWxM1j40BDJj/</span>
    <Button type='info'>hehe</Button>
    <button @click="toast">toast</button>
    <hr>
    <mt-swipe :auto="4000" class='test'>
      <mt-swipe-item>
        <div class='item'>
          test
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class='item'>
          test
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class='item'>
          test
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <hr>  
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
       <mt-index-section index="c">
        <mt-cell title="caldwin"></mt-cell>
        <mt-cell title="craden"></mt-cell>
      </mt-index-section>
   
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import  {Toast,Indicator} from 'mint-ui'
export default {
  methods:{
    toast(){
      // Toast('heheh')
      Toast({
      message: '提示',
      position: 'bottom',
      duration: 5000
    });
    }
  },
  created(){
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    setTimeout(()=>{
      Indicator.close()
    },5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  width: 100px;
  height: 100px;
  background: red;
}
.test{
  height: 100px;
}
</style>
