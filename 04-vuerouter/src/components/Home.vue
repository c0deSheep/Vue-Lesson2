<template>
  <div>
    <h2>Hello,I AM Home Page</h2>
    <p>Thanks for viewing!</p>
<!--    使用子路由-->
    <router-link to="/Home/news" replace>首页新闻</router-link>
    <router-link to="/Home/message" replace>首页消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    //mounted：被挂载，就是在父组件中取代其
    mounted() {
    },
    methods:{},
    //created：表示生命周期，表示被创造这个组件使用时执行
    created() {
      console.log('home created')
    },
    //destroyed：表示生命周期，表示这个组件被销毁时执行
    destroyed() {
      console.log('home destroyed')
    },
  //  以下这两个函数表示在当前路由活跃时和非活跃时执行，同时只有该组件被保持了状态用了key-alive时，才有效
    activated () {
      //
      this.$router.push(this.path);
      console.log('activated');
    },
    deactivated () {
      console.log('deactivated');
    },
    beforeRouteLeave (to, from, next) {
      console.log(this.$route.path);
      this.path = this.$route.path;
      next();
    }
  }
</script>

<style>

</style>
