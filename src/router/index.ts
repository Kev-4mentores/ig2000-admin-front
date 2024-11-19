import { createRouter, createWebHashHistory } from 'vue-router'
import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'
import userRoutes from '@/modules/user/router'
import { useAuthStore } from '@/modules/auth/stores/useAuthStore'

const routes = [
  ...authRoutes,
  ...dashboardRoutes,
  ...userRoutes,

  {
    meta: {
      title: 'Error',
      requiresAuth: false
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})


router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthStore()
  console.log('isAuthenticated', isAuthenticated, to.meta.requiresAuth);
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
