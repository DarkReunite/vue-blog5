import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Summary from './views/Summary.vue';
import Article from './views/Article.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Summary,
          props: { page: 1 }
        },
        {
          path: 'page/:page',
          component: Summary,
          props: true
        },
        {
          path: 'article/:id',
          component: Article,
          props: true
        }
      ]
    },
  ]
})
