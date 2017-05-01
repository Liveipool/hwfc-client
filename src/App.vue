<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <div id="content">
      <router-view></router-view>
    </div>
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

<style scoped>
/*用flexbox布局来实现以下效果：
上面高度不够时，底栏就固定在页面底部
上面高度够时，底栏就不固定，
顺着往下移，滚动条拉到最底才看得到
*/
#app {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#content {
  flex-grow: 1;
}
</style>
