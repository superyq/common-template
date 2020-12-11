import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 路由
import '@/scss/index.scss'
import router from '@/router'
// 自适应js
import '@/utils/rem.js';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
