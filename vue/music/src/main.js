import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './base/axios'
import './style/reset.css'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
// 将axios 挂载vue的原型下 目的 组件继承自实例 组件也有$axios
Vue.prototype.$axios=axios
// 使用图片懒加载
// Vue.use(VueLazyLoad)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: '/favicon.ico',
  loading: '/loading.gif',
  attempt: 1
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
