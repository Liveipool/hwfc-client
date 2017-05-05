// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import 'normalize.css'
// import $ from 'jquery'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/590afb4a6d4f0168b1b916ff/hwfc'

Vue.prototype.$http = axios

Vue.config.productionTip = true

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
