import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载方式引入包，可以保证网页加载速度，避免不立即需要得网页js页同时加载,通过npm run build打包最终版后可以得到一个包一个js文件
const Home = () => import ('../views/home/Home')
const Cart = () => import ('../views/cart/Cart')
const Category = () => import ('../views/category/Category')
const Profile = () => import ('../views/profile/Profile')


Vue.use(Router)

//配置映射关系
const routes =  [
  {
    path:'',
    redirect:'/Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Profile',
    component: Profile
  }
]
export default new Router({
  mode:'history',
  routes
})




