// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import axios from 'axios'
import YDUI from 'vue-ydui';



//import './assets/js/root.js'
//import './assets/css/base.css'
//import './assets/css/animate.css'
//import './assets/css/swiper.min.css'
//import './assets/js/jquery-2.1.4.min.js'
import Swiper from '@/../static/js/swiper.min.js'


Vue.use(YDUI);

Vue.config.productionTip = false
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  
  // 判断是否存在token，如果存在的话，则每个http header都加上token
//if(store.state.token) {  
//  config.headers.Authorization = `token ${store.state.token}`;
//}
  
  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  
  return response;
}, function (error) {
	
// 	if(error.response) {
//		switch (error.response.status) {
//    case 401:
//        // 返回 401 清除token信息并跳转到登录页面
//        store.commit(types.LOGOUT);
//        router.replace({
//        	path: 'login',
//        	query: {redirect: router.currentRoute.fullPath}
//        })
//	}
	
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
