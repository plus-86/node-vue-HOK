import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import instance from './request/request'

Vue.config.productionTip = false

Vue.prototype.$axios = instance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
