<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  // 将所有的tabbar和tabbaritem的标签内容放入到maintabbar中，并引入使用maintabbar，保持App.vue的整洁
  import MainTabBar from './components/MainTabBar'

  //将App导出
  export default {
  name: 'App',
  //  注册上面引入的两个组件
  components:{
    MainTabBar
  },
}


</script>

<style>

  /*使用此种方法在App处引入基本样式*/
  @import "./assets/css/base.css";



</style>
