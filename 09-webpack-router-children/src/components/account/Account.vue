<template>
  <div>
    <h2>
      Account
    </h2>

    <router-link to="/account/login">Login</router-link>
    <router-link to="/account/register">Register</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "account"
  }
</script>

<style scoped>

</style>