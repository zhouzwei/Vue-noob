// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import axios from 'axios'

import './assets/js/root.js'
import './assets/css/base.css'
import './assets/css/animate.css'
import './assets/css/swiper.min.css'
import './assets/js/jquery-2.1.4.min.js'
import Swiper from '@/../static/js/swiper.min.js'







Vue.config.productionTip = false
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  
  return response;
}, function (error) {

  return Promise.reject(error);
});
//axios.defaults.baseURL='http://localhost:8080/';
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
