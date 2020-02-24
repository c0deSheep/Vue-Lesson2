import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//引入初始化css文件,但不推荐在这里添加，因为会使混论，在App.vue组件style中使用
// require('./assets/css/base.css')


