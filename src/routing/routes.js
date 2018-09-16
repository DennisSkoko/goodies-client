export default [
  {
    path: '/',
    exact: true,
    component: () => import('../pages/Welcome')
  },
  {
    path: '/browse',
    component: () => import('../pages/Browse')
  },
  {
    path: '/sign-in',
    exact: true,
    component: () => import('../pages/SignIn')
  }
]
