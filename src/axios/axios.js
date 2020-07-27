import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.6:8080/'
Vue.prototype.$axios = axios
