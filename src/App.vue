<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/teamIntroduction">团队介绍</router-link>
    <router-link to="/home">主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
