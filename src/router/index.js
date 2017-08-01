import Vue from 'vue'
import Router from 'vue-router'
import All from '@/pages/article/All'
import List from '@/pages/article/List'
import Add from '@/pages/article/Add'

import Signin from '@/pages/user/Signin'
import Signup from '@/pages/user/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'all',
      component: All
    }, {
      path: '/list/:_uId',
      name: 'list',
      component: List
    }, {
      path: '/add',
      name: 'add',
      component: Add
    }, {
      path: '/signin',
      name: 'signin',
      component: Signin
    }, {
      path: '/signup',
      name: 'signup',
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
