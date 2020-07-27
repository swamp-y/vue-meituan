import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Home/home'
import order from '../components/Order/order'
import my from '../components/My/my'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/order',
    component: order
  },
  {
    path: '/my',
    component: my
  }
]

const router = new VueRouter({
  routes
})

export default router

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
