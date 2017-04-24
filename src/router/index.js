import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import TeamIntroduction from '../views/TeamIntroduction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/teamIntroduction',
      name: 'TeamIntroduction',
      component: TeamIntroduction
    }
  ]
})
