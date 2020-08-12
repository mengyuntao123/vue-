// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// import { HappyScroll } from 'vue-happy-scroll'
// //自定义组件名
// Vue.component('happy-scroll', HappyScroll)
// // 引入css
// import 'vue-happy-scroll/docs/happy-scroll.css'


import 'babel-polyfill';

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL="/api"
Vue.use(VueAxios, axios)

Vue.config.productionTip = false



Vue.filter('dateFilter', function (val) {


  // console.log(val)
  
  
  
  
  })

  



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


