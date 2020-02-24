<template>
  <div class="show-login-btn">
    <i class="fa fa-sign-in" @click="login"> Show Login Form</i>
  </div>
</template>

<script>
  export default {
    name: "Index",
    methods : {
      login () {
        this.$router.push({path:'/login/form'})
      }
    }
  }
</script>

<style scoped>
  body {
    background-color: #333;@import;
  }
  .show-login-btn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #ffffff98;
    border: 2px solid;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
  }
</style>