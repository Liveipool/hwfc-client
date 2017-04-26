import Vue from 'vue'
import Router from 'vue-router'

import Administrator from '@/views/Administrator'
import Essays from '@/views/Essays'
import Home from '@/views/Home'
import Images from '@/views/Images'
import Introduction from '@/views/Introduction'
import Members from '@/views/Members'
import Records from '@/views/Records'
import Videos from '@/views/Videos'
import VideosDetail from '@/views/VideosDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/administrator',
      name: 'Administrator',
      component: Administrator
    },
    {
      path: '/essays',
      name: 'Essays',
      component: Essays
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/images',
      name: 'Images',
      component: Images
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    },
    {
      path: '/videos/:section',
      name: 'VideosDetail',
      component: VideosDetail
    }
  ]
})
