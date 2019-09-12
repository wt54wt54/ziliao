import Vue from 'vue'
// 引入Vue 
import App from './App.vue'
// 根组件
// 引入一个组件
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 渲染app组件
}).$mount('#app')
// 将app 组件挂载到 #app这个元素上
