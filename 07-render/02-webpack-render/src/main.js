import Vue from '../node_modules/vue/dist/vue.js'
//
// const login = {
//   template : '#login'
// }

// 1.直接导入vue结尾文件，但是由于webpack没有这个加载器，所有需要下载:  vue-loader  vue-template-compiler
// 除了从node_module导入的文件，其他的都得加文件后缀
import login from '../components/login.vue'

// 2.配置文件中，新增loader配置项 ： {test : /\.vue$/, use ： 'vue-loader'}

const vm = new Vue ({
  el:'#app',
  data:{
    message:'Hello',
  },
  render: c => c(login)
})

