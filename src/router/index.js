import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';

Vue.use(VueRouter)

// 基础路由配置
const router = new VueRouter({
  mode: 'hash',
  base: '/admin',
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: to.meta.y || 0 };
  },
  routes
})

// 解决在路由中添加了相同的路由。
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router