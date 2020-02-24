//0.配置路由相关信息，引入包vue和vue-router
import Vue from 'vue'
import Router from 'vue-router'
// // 0.5导入相关的包,导入组件，这里引入的是components文件夹中的组件，用于展示不同点击下的页面
// import  Home from '../components/Home'
// import  About from '../components/About'
// //新增一个user页面，引入组件：
// import  User from '../components/User'

//路由懒加载方式引入包，可以保证网页加载速度，避免不立即需要得网页js页同时加载,通过npm run build打包最终版后可以得到一个包一个js文件
const Home = () =>import('../components/Home')
const About = () =>import('../components/About')
const User = () =>import('../components/User')
const Profile = () => import('../components/Profile')

// 子路由也是通过懒加载引入包
const HomeMessage = () => import('../components/HomeMessage');
const HomeNews = () => import('../components/HomeNews');


//1.通过Vue.use(插件)，安装插件
Vue.use(Router)

//2.创建router插件实例
// 只要下面的component对应的上上面引入的组件，这样path就可以自定义需要的后缀地址，而默认地址就指向redirect等同于path
// 而App.vue中的this.$router.push('')或者是to中的地址需要一致;
const router = new Router({
  //设置浏览器地址模式，取消更替一个#
  mode:'history',
  //设置默认选中时自动添加的类名，方便之后添加样式
  linkActiveClass:'active',
// 配置路由和组件之间的路径和映射的应用关系
  routes: [
    {
      //设置默认界面，path为空，redirect指向默认界面的地址，要和下面的需要默认选中的地址一致
      path:'',
      //重新定向
      redirect:'/Home'
    },
    {
      //映射位置，这里的path属性对应着src下的App里的router-link中的to属性，要一致,否则报错
      path: '/Home',
      //引入组件
      component:Home,
    //  ---引入子路由---方法：添加children属性，对应数组，里面配置路由和组件之间的路径和映射的应用关系
      children:[
        {
          //设置子路由默认界面，path为空，redirect指向默认界面的地址，要和下面的需要默认选中的地址一致
          path:'',
          //重新定向
          redirect:'news'
        }
        ,{
          //作为子路由，在浏览器路径设置上不需要添加/Home再写子路径，直接写子路径需要显示的文字,
          // 同时，配置完子路由组件之后，需要使用子路由，但是这个子路由的使用，并不是在App中使用，而是在他的父路由的vue组件中使，一层扣一层，不能越级
          path:'news',
          name:'HomeNews',
          component: HomeNews,
          // meta:{
          //   title:'首页新闻'
          // }
        },
        {
          path:'message',
          name:'HomeMessage',
          component: HomeMessage,
          // meta:{
          //   title:'首页消息'
          // }
        }
      ],
      meta:{
        title:'首页'
      }
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      meta:{
        title:'关于'
      }
    },
    // 为新增的user页面组件配置映射位置,并且拼接id，以:xxx接上，表示绑定这个参数
    {
      path:'/User/:userId',
      name:'User',
      component:User,
      meta:{
        title:'用户'
      }
    },
  //  为新增的Profile页面组件配置映射位置
    {
      path:'/Profile',
      component:Profile,
      meta:{
        title:'个人档案'
      }
    }
  ]
});

//---------前置钩子(hook)------即发生跳转生命周期函数等动作之前就执行:created/destroyed/mounted/updated
//通过路由导航为所有页面添加标题：这里的router是Router实例，beforeEach是遍历方法,里面传递一个函数
router.beforeEach((to, from, next) => {
//  从from跳转到to
//  这里需要给每个route路由都添加一个meta自由属性，然后在里面添加对应的title，
//  同时，因为默认打开的页面是Home里的News,有两层，所以直接to.meta.title取不了title,但通过matched属性可以获取到里面的meta中的title
//
  document.title = to.matched[0].meta.title;
  //这个next()必须要写，否则报错，应该是用于跳转的方法
  next();
  // console.log(from)
  // console.log(to)

})


//---------后置钩子(hook)------即发生跳转等动作之后才执行
router.afterEach((to,from)=>{
  //后置钩子因为是发生跳转等动作之后才执行,所以不需要next()来继续跳转等
  console.log('------------afterEach后置钩子被执行------------')
})


export default router;
