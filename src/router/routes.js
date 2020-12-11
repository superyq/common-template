const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "home" */ '@/pages/home')
  },
]

export default routes;