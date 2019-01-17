// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

import './assets/js/root.js'
import './assets/css/base.css'
import './assets/css/animate.css'
import './assets/css/swiper.min.css'
import './assets/js/jquery-2.1.4.min.js'
import Swiper from '@/../static/js/swiper.min.js'







Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
