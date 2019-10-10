import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(MintUI)
Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
