const routes = [
  {
    path: '*',
    name: 'error',
    component: () => import('@/pages/404')
  },
  {
    path: '/',
    component: () => import('@/pages/home')
  },
  {
    path: '/404',
    component: () => import('@/pages/404')
  },
  {
    path: '/demo1',
    component: () => import('@/pages/demo1')
  },
  {
    path: '/demo2',
    component: () => import('@/pages/demo2')
  }
]

export default routes;