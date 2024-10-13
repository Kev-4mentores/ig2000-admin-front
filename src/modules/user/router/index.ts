import { RouteRecordRaw } from 'vue-router'
import Users from '@/modules/user/views/UserView.vue'

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
       title: 'Users',
      requiresAuth: false
    }
  },
]

export default userRoutes