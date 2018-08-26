export default [
  {
    path: '/',
    exact: true,
    component: () => import('../views/Welcome')
  },
  {
    path: '/browse',
    component: () => import('../views/Browse')
  },
  {
    path: '/sign-in',
    exact: true,
    component: () => import('../views/SignIn')
  }
]
