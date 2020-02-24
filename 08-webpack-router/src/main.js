import Vue from 'vue'
// 1.引入路由文件
import VueRouter from 'vue-router'

// 2.手动安装VueRouter
Vue.use(VueRouter)

// 导入App组件
import App from './App.vue'

// 导入Account组件
import Account from './components/Account.vue'
// 导入GoodsList组件
import GoodsList from './components/GoodsList.vue'


// 3.创建路由对象
const router = new VueRouter({
  routes : [
    //account goodslist
    {path:'/account',component : Account},
    {path:'/goodslist',component : GoodsList}

  ]
})

const app = new Vue ({
  el:'#app',
  render : c => c(App), // render会把el指定的容器中，所有的内容都清空覆盖，所以，在index.html设置所有的内容都会没有

  // 4.将路由对象挂载到vm实例上
  router,

  // 5.在App组件中设置，不能再index中设置，见29行
})