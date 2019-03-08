import Vue from 'vue'
import Router from 'vue-router'

import Article from './views/Article.vue';
import Category from './views/Category.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'home',
      component: Home,
      meta: {
        auth: true
      },
      children: [
        {
          path: 'upload',
          component: Article,
          meta: {
            auth: true
          },
        },
        {
          path: 'category',
          component: Category,
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
