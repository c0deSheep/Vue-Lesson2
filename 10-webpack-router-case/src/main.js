import Vue from 'vue'

import App from './App.vue'

import router from './router/index.js'

import 'font-awesome/css/font-awesome.css';


const vm = new Vue({
  el : '#app',
  render : c => c(App),
  router,
})

