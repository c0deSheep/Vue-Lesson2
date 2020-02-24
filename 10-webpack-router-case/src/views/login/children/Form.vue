<template>
  <div class="login-box">
    <div class="hide-login-btn" @click="toIndex">
      <i class="fa fa-close"></i>
    </div>
    <form class="login-form" action="../../../../index.html">
      <h1>Welcome</h1>
      <input class="txtb" type="text" name="" placeholder="Username">
      <input class="txtb" type="password" name="" placeholder="Password">

      <input class="login-btn" type="submit" name="" value="LOGIN">
    </form>
  </div>
</template>

<script>
  export default {
    name: "Form",
    methods : {
      toIndex () {
        this.$router.push({path:'/login/index'})
      }
    }
  }
</script>

<style scoped>
  .login-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100Vh;
    background-image: linear-gradient(45deg,#9fbaa8,#31354c);
    overflow: hidden;
  }

  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    text-align: center;
  }

  .login-form h1 {
    font-weight: 400;
    margin-top: 0;
  }

  .txtb {
    display: block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: 240px;
    background-color: #ffffff28;
    border: 1px solid #fff;
    padding: 10px 20px;
    color: #fff;
    outline: none;
    margin: 10px 0;
    border-radius: 6px;
    text-align:center;
  }

  .login-btn {
    width: 240px;
    background-color: #2c3e50;
    border: 0;
    color: #fff;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
  }

  .hide-login-btn {
    color:#fff;
    position: absolute;
    top: 40px;
    right: 40px;
    cursor: pointer;
    font-size: 24px;
    opacity: .7;
  }
</style>