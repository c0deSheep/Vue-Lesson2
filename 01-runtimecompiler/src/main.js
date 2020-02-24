// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const Cpn = {
  template:`
    <h2>{{message}}</h2>
  `,
  data () {
    return {
      message:'Hello I Am Component!'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render:function (createElement) {
    // 1.普通用法：createElement（'标签'.{属性键值对},['内容']）
    // return createElement('h2',{class:'box'},['Hello World'])
    //1.5可以在内容中在嵌套一层createElement
    // return createElement('h2',
    //   {class:'box'},
    //   ['Hello World',createElement('button',['按钮'])])

    // 2.传入组件对象：
    return createElement(App)
  }
})
