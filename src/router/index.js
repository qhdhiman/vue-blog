import Vue from 'vue'
import Router from 'vue-router'
import All from '@/pages/article/All'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All',
      component: All
    }, {
      path: '/article',
      name: 'Article',
      children: [{
        path: '/all',
        name: 'All',
        component: All
      }]
    }
  ]
})
