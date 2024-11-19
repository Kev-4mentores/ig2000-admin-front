import { RouteRecordRaw } from 'vue-router'
import Home from '@/modules/dashboard/views/HomeView.vue'

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: Home,
    meta: {
       title: 'Dashboard',
      requiresAuth: true
    }
  },
]

export default dashboardRoutes