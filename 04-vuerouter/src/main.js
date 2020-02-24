import Vue from 'vue'
//导入App组件，这个是实际最终显示的首页标签，而index.html只是一个傀儡首页
import App from './App'
//导入路由配置
import router from './router/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //将router文件夹下的router实例插入到Vue实例中
  router:router,
  //render表示将这个用App.Vue实例代替index.html中的元素
  render: h => h(App)
})




