import  Vue from 'vue'
import  VueRouter from 'vue-router'

const Login= () => import ('../views/login/Login.vue')
const Index= () => import ('../views/login/children/Index.vue')
const Form = () => import('../views/login/children/Form.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes : [

    {path : '/',
    redirect :'/login/index'},

    {path : '/login',
    component : Login,
    children : [
      {path:'index',
      component : Index},
      {path:'form',
        component : Form},
    ]}
  ]
})

export default router;