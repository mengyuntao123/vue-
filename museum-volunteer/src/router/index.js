import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store/store.js';

/* 初始路由 */
let router = new Router({
    // mode: 'history',
    routes: [
        {
         path:"/",
         redirect:"/login"
        },
        {
            path:"/login",
            name:"login",
            component:()=>import("../components/login")
        },
       
        { 
            path: '/home',
            name: 'home',
            component: () => import('../components/home'),
            redirect:'dash-board',
            meta: {
                requiresAuth: true,
                permitName: '首页'
            },
            children: [
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
                  path: '/sys/toUserManager',
                  name: 'toUserManager',
                  component: () => import('../components/sys/toUserManager'),
                  meta: ["系统管理","用户管理"]
              },  

              {
                path: '/sys/toRoleManager',
                name: 'toRoleManager',
                component: () => import('../components/sys/toRoleManager'),
                meta: ["系统管理","角色管理"]
            },  

            {
              path: '/sys/toPermissionManager',
              name: 'toPermissionManager',
              component: () => import('../components/sys/toPermissionManager'),
              meta: ["系统管理","权限管理"]
          },  
                
               
                
            ]
        },
    ]
});







// 挂载路由导航守卫


router.beforeEach((to, from, next) => {
  // to：将要访问的路径
  // from：代表从那个路径跳转而来
  // next是一个函数,表示放行;  next() 放行    next('/login') 强制跳转

  // 如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  // 从sessionStorage中获取到保存的token值
  const tokenStr = window.sessionStorage.getItem('token');
  // console.log(tokenStr)
  // 没有token 强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})


Vue.use(Router);

export default router;

/* 准备动态添加的路由 */
export const dynamicRoutes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: () => import('../components/home'),
    //     meta: {
    //         requiresAuth: true
    //     },
    //     children: [

    //     ]
    // },
    // {
    //     path: '/403',
    //     component: () => import('../components/403')
    // },
    // {
    //     path: '*',
    //     component: () => import('../components/403')
    // }
];
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}