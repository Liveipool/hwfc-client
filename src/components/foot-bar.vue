<template>
  <div id='footBar' class="hidden-xs">
    <div class="foot-bar-name chinese-name">我在中大，混碗饭吃</div>
    <div class="foot-bar-name english-name">Hello World Football Club</div>
    <div class="foot-bar-bottom">
      <span>@ Copyright Hello World Football Club</span>
      <router-link to="">没有账号?</router-link>
    </div>
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
  width: 100%;
  font-family: Arial;
}

.foot-bar-name {
  color: #39f;
  text-align: center;
}

.chinese-name {
  font-weight: bold;
  font-size: 75px;
}

.english-name {
  font-size: 50px;
  margin-bottom: 12px;
}

.foot-bar-bottom {
  height: 38px;
  background-color: #39f;
  font-size: 20px;
  color: #313231;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  margin-left: 25px;
}

/*router-link本身就是一个a标签*/
a {
  margin-right: 33px;
  color: #313231;
  text-decoration: underline;
}
</style>
