<template>
  <div id='footBar' class="navbar-fixed-bottom visible-lg-block">
    <h1>底栏</h1>
  </div>
</template>

<script>
export default {
  name: 'footBar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#footBar {
  width: calc(100% - 2px);
  height: 155px;
  border: 1px solid #39f;
  text-align: center;
}
</style>
