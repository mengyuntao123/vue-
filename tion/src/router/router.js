export default[
    {
        path: '/dash-board',
        name: 'dash-board',
        component: () => import('@/components/dash-board'),
        meta: {
            permitName: 'dash-board'
        }
    },
    // 工作台-待办事项
    {
        path: '/todo-list',
        name: 'todo-list',
        component: () => import('@/components/todo-list'),
        meta: {
            permitName: 'todo-list'
        }
    },
    // 工作台-我的足迹
    {
        path: '/my-footprint',
        name: 'my-footprint',
        component: () => import('@/components/my-footprint'),
        meta: {
            permitName: 'my-footprint'
        }
    },
    {
        path: '/sys-log',
        name: 'sys-log',
        component: () => import('@/components/sys-log'),
        meta: {
            permitName: 'sys-log'
        }
    },
    {
        path: '/sys-maintain',
        name: 'sys-maintain',
        component: () => import('@/components/sys-maintain'),
        meta: {
            permitNam: 'sys-maintain'
        }
    },
]