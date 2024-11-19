import { RouteRecordRaw } from 'vue-router'
import Users from '@/modules/user/views/UserView.vue'

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
       title: 'Users',
      requiresAuth: true
    }
  },
]

export default userRoutes