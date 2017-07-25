import Vue from 'vue'
import Router from 'vue-router'
import All from '@/pages/article/All'
import Add from '@/pages/article/Add'

import Signin from '@/pages/user/Signin'
import Signup from '@/pages/user/Signup'

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
    }, {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
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
