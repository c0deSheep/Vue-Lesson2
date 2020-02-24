<template>
  <div class="login-box">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>
  .login-box {
    overflow: hidden;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }



  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s ease ;
  }
</style>