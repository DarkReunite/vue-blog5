import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/api/index'
import '@/plugins/vuetify'
import '@/plugins/axios'



Vue.config.productionTip = false;

// 路由卫士
router.beforeEach((to, from, next) => {
  //获取localStorage中的token
  let token = localStorage.getItem('token');

  //如果token存在，并且进入管理页面时 通过
  if (to.meta.auth && token) {
    next();
  }else{ //未登录 或者不进入管理页面
    // 想进入需要登录的页面
    if (to.meta.auth) {
      next({
        path: '/login'
      })
      return;
    }

    next();
  }
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
