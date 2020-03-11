import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import FrontPage from './components/FrontPage.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')

export default router
