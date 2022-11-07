import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import instance from './request/request'

import '@/assets/style/style.css'

Vue.config.productionTip = false

Vue.prototype.$axios = instance
// 给全局挂载data，methods等
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$axios.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
