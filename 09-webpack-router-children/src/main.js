import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入App组件
import App from './App.vue'

// 导入Account组件
import Account from './components/account/Account.vue'
// 导入GoodsList组件
import GoodsList from './components/GoodsList.vue'


// 1.引入children的vue
import  Register from './components/account/children/Register.vue'
import  Login from './components/account/children/Login.vue'


const router = new VueRouter({
  routes : [
    //account goodslist
    {path:'/account',
      component : Account,
    children : [
      {path:'login', component:Login},
      {path:'register', component:Register}
    ]},
    {path:'/goodslist',component : GoodsList}

  ]
})

const app = new Vue ({
  el:'#app',
  render : c => c(App), // render会把el指定的容器中，所有的内容都清空覆盖，所以，在index.html设置所有的内容都会没有

  router,

})