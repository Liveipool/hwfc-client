<template>
  <div class="navigation-bar">
    <img src="../../static/home/logo.png" alt="logo" class="navigation-bar__logo" height="85px">
    <router-link to="/home" class="navigation-bar__brand">HWFC</router-link>
    <div class="navigation-bar__navs">
      <router-link class="navigation-bar__nav" v-for="nav in navs" :to="nav.url" key="nav.url">{{nav.description}}</router-link><router-link v-if="logged" to="/administrator" class="navigation-bar__nav">管理员页面</router-link>
      <router-link v-if="logged" to="/home" class="navigation-bar__log" @click.native="logOut">登出</router-link><router-link v-if="!logged" to="/home" class="navigation-bar__log" @click.native="logIn">管理员登录</router-link>
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

.navigation-bar__logo {
  float: left;
  margin-left: 32px;
}

.navigation-bar__brand {
  float: left;
  margin-left: 12px;
  font-size: 32px;
}

.navigation-bar__navs {
  float: right;
  margin-right: 32px;
  font-size: 28px;
}

.navigation-bar__nav {
  padding: 0 8px 5px;
}

.navigation-bar__nav:hover, .navigation-bar__log:hover, .navigation-bar__nav.router-link-active {
  border-bottom: 2px solid white;
}

.navigation-bar__nav + .navigation-bar__nav {
  margin-left: 10px;
}

.navigation-bar__log {
  margin-left: 32px;
  padding: 0 8px 5px;
}

</style>
