<template>
  <div id="navigationBar">
    <router-link to="/home" id="homeLink">主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'navigationBar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#navigationBar {
  width: 100%;
  height: 85px;
  background-color: #3399ff;
}

#homeLink {
  font-family:ArialMT;
  font-size:28px;
  color:#FEFFFE;;
  text-align:center;
  position: relative;
  left: 47%;
  top: 20px;
}
</style>
