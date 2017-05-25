<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/">Home</router-link>
    <router-link to="/Page">Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
