<template>
    <div>
      <h2>你好，我是新增的User页面</h2>
      <p>User is God!!!!</p>
      <h2>{{userId}}</h2>
      <h1>{{userId2}}</h1>
    </div>
</template>

<script>
  export default {
    name: "User",
    data () {
      return {
        userId2:this.$route.params.userId,
      }
    },
    //用computed计算属性绑定数据
    computed:{
      userId () {
        //这里的$route，就是处于活跃状态的路由，所以这个return this.$route就是返回活跃状态的路由，
        // 而此前出现的$router就是路由实例，实例里有很多的route，活跃状态就是this.$route
        //而this.$route.params中的params代表参数属性，后面的参数和index中的User配置path中'/User/:useId'的userId
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
