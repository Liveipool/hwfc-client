<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/administrator">管理员页面</router-link>
    <router-link to="/essays">文章专区</router-link>
    <router-link to="/home">主页</router-link>
    <router-link to="/images">图片专区</router-link>
    <router-link to="/introduction">团队介绍</router-link>
    <router-link to="/members">成员介绍</router-link>
    <router-link to="/records">战绩记录</router-link>
    <router-link to="/videos">视频专区</router-link>
    <router-link to="/videos/games">视频专区-比赛</router-link>
    <router-link to="/videos/goals">视频专区-进球</router-link>
    <router-link to="/videos/entertainments">视频专区-娱乐</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
