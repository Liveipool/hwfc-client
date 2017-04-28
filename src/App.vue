<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import navigationBar from '@/components/navigation-bar'
import footBar from '@/components/foot-bar'

export default {
  name: 'app',
  components: {
    'navigation-bar': navigationBar,
    'foot-bar': footBar
  }
}
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
