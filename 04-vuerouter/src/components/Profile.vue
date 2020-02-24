<template>
  <div>
    <h2>I Am Profile</h2>
<!--    将App组件传入的参数，在这里可以接收,可以直接以$route.query.name接收，或者用于data数据方法中-->
    <p>{{name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    //
    data () {
      return {
        name:this.$route.query.name
      }
    },
    methods:{},
    created () {
      console.log('Profile created')
    },
    destroyed () {
      console.log('Profile destroyed -----证明没有保持活跃')
    }
  }
</script>

<style scoped>

</style>
