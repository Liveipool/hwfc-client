<template>
  <div class="navigation-bar">
    <img src="../../static/home/logo.png" alt="logo" class="navigation-bar-logo" height="85px">
    <router-link to="/home" class="navigation-bar-brand">HWFC</router-link>
    <div class="navigation-bar-navs">
      <router-link class="navigation-bar-nav" v-for="nav in navs" :to="nav.url" key="nav.url">{{nav.description}}</router-link><router-link v-if="logged" to="/administrator" class="navigation-bar-nav">管理员页面</router-link>
      <router-link v-if="logged" to="/home" class="navigation-bar-log" @click.native="logOut">登出</router-link><router-link v-if="!logged" to="/home" class="navigation-bar-log" @click.native="logIn">管理员登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigationBar',
  data () {
    return {
      navs: [
        {
          description: '主页',
          url: '/home'
        },
        {
          description: '球队介绍',
          url: '/introduction'
        },
        {
          description: '球队成员',
          url: '/members'
        },
        {
          description: '战绩记录',
          url: '/records'
        }
      ]
    }
  },
  methods: {
    logIn () {
      this.$store.commit('logIn')
    },
    logOut () {
      this.$store.commit('logOut')
    }
  },
  computed: {
    logged () {
      return this.$store.state.logged
    }
  }
}
</script>

<style scoped>
.navigation-bar {
  width: 100%;
  height: 85px;
  line-height: 85px;
  background-color: #39f;
  font-family: ArialMT;
}

.navigation-bar a {
  color: #FEFFFE;
  text-decoration: none;
}

.navigation-bar-logo {
  float: left;
  margin-left: 32px;
}

.navigation-bar-brand {
  float: left;
  margin-left: 12px;
  font-size: 32px;
}

.navigation-bar-navs {
  float: right;
  margin-right: 32px;
  font-size: 28px;
}

.navigation-bar-nav {
  padding: 0 8px 5px;
}

.navigation-bar-nav:hover, .navigation-bar-log:hover, .navigation-bar-nav.router-link-active {
  border-bottom: 2px solid white;
}

.navigation-bar-nav + .navigation-bar-nav {
  margin-left: 10px;
}

.navigation-bar-log {
  margin-left: 32px;
  padding: 0 8px 5px;
}

</style>
