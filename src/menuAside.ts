import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact
} from '@mdi/js'

export default [
  {
    to: '/',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    to: '/tables',
    label: 'Tables',
    icon: mdiTable
  },
  {
    to: '/forms',
    label: 'Forms',
    icon: mdiSquareEditOutline
  },

  {
    to: '/users',
    label: 'Usuarios',
    icon: mdiSquareEditOutline
  },
 
  // {
  //   label: 'Dropdown',
  //   icon: mdiViewList,
  //   menu: [
  //     {
  //       label: 'Item One'
  //     },
  //     {
  //       label: 'Item Two'
  //     }
  //   ]
  // },
  // {
  //   href: 'https://github.com/justboil/admin-one-vue-tailwind',
  //   label: 'GitHub',
  //   icon: mdiGithub,
  //   target: '_blank'
  // },
  
]
