import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from  './todolist/store/store'
Vue.config.productionTip = false
// var p = {
//   name : '李四',
//   age : 20
// }
// console.log(p.name)
//  var attName = 'name';
// console.log(p[attName])
// console.log(p[attName]) //这里 attName表示的是一个变量名。

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
