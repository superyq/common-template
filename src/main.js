import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 路由
import '@/scss/index.scss'
import router from '@/router'
// 自适应js
import '@/utils/rem.js';
// echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
// 自定义组件
import myComponents from "@/components";
Vue.use(myComponents);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
