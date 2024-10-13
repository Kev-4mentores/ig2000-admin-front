import { RouteRecordRaw } from 'vue-router'
import Login from '@/modules/auth/views/LoginView.vue'

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  
]

export default authRoutes