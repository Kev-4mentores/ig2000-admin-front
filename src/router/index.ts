import { createRouter, createWebHashHistory } from 'vue-router'
import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'
import userRoutes from '@/modules/user/router'

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
  if (to.meta.requiresAuth && !isLoggedIn()) {
    next({ name: 'login' })
  } else {
    next()
  }
})

// Función para verificar si el usuario está autenticado
function isLoggedIn() {
  // Aquí debes implementar la lógica para verificar si el usuario está autenticado
  // Por ejemplo, puedes verificar si hay un token de autenticación en el localStorage
  return localStorage.getItem('token') !== null
}

export default router
