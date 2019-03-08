import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/api/index'
import '@/style/font.scss';
import '@/style/common.scss';
import '@/style/iconfont/iconfont.css';
import '@/style/highlight/styles/monokai-sublime.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
