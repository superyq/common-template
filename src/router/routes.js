const routes = [
  {
    path: '*',
    name: 'error',
    component: () => import('@/pages/404')
  },
  {
    path: '/',
    redirect: { name: 'demo' }
  },
  {
    path: '/404',
    component: () => import('@/pages/404')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/pages/demo')
  },
]

export default routes;