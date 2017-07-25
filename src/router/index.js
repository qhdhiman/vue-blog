import Vue from 'vue'
import Router from 'vue-router'
import All from '@/pages/article/All'
import Add from '@/pages/article/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All',
      component: All
    }, {
      path: '/add',
      name: 'Add',
      component: Add
    }
    // , {
    //   path: '/article',
    //   name: 'Article',
    //   component: App,
    //   children: [{
    //     path: '/all',
    //     name: 'All',
    //     component: All
    //   }, {
    //     path: '/add',
    //     name: 'Add',
    //     component: Add
    //   }]
    // }
  ]
})
