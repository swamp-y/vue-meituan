import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './common/css/style.styl'
import router from './router/router'
import './axios/axios'
// import axios from 'axios'
Vue.config.productionTip = false
// Vue.prototype.$axios = axios

new Vue({
  data: {
    msg: 1
  },
  router,
  render: h => h(App)
}).$mount('#app')
