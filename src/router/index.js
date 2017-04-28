import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import introduction from '@/views/introduction'
import members from '@/views/members'
import records from '@/views/records'
import images from '@/views/images'
import videos from '@/views/videos'
import videosParts from '@/views/videos-parts'
import essays from '@/views/essays'
import administrator from '@/views/administrator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/administrator',
      name: 'administrator',
      component: administrator
    },
    {
      path: '/essays',
      name: 'essays',
      component: essays
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/images',
      name: 'images',
      component: images
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/members',
      name: 'members',
      component: members
    },
    {
      path: '/records',
      name: 'records',
      component: records
    },
    {
      path: '/videos',
      name: 'videos',
      component: videos
    },
    {
      path: '/videos/:section',
      name: 'videos-parts',
      component: videosParts
    }
  ]
})
