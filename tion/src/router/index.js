import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store/store.js';

/* 初始路由 */
let router = new Router({
    // mode: 'history',
    routes: [
        // {
        //  path:"/",
        //  redirect:"/login"
        // },
        // {
        //     path:"/login",
        //     name:"login",
        //     component:()=>import("../components/login")
        // },
        {
            path:"/",
            redirect:"/home"
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
                            path: '/todo-list',
                            name: 'todo-list',
                            component: () => import('@/components/todo-list'),
                            meta: [
                              'todo-list'
                            ]
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
                    meta: ["库房管理","todo-list"]
                },
                {
                    path: '/sys-maintain',
                    name: 'sys-maintain',
                    component: () => import('@/components/sys-maintain'),
                    meta: {
                        permitName: 'sys-maintain'
                    }
                },
                {
                    path:"/users",
                    name:"users",
                    component:()=>import("../components/users.vue"),
                    meta:{
                        permitName:"users"
                    }
                },
                {
                    path:"/welcome",
                    name:"welcome",
                    component:()=>import("../components/welcome"),
                    meta:{
                        permitName:"welcome"
                    }
                },
                {
                    path:"/tatistic",
                    name:"tatistic",
                    component:()=>import("../components/tatistic"),
                    meta:{
                        permitName:"tatistic"
                    }
                },
                {
                    path:"/query",
                    name:"query",
                    component:()=>import("../components/query.vue"),
                    meta:{
                        permitName:"query"
                    }
                },
                
            ]
        },
    ]
});


// router.beforeEach((to,from,next)=>{
  
//     if(!sessionStorage.token){
//         if(to.matched.length>0&&!to.matched.some(item=>item.meta.requiresAuth)){
//             next()
//         }else{
//             next({path:"/login"})
//         }
//     }else{
//         if(!store.state.permission.permissionList){
//             store.dispatch('permission/FETCH_PERMISSION').then(()=>{
//                 next({path:to.path,query:to.query})
//             })
//         }else{
//             if(to.path!=="/login"){
//                 if(to.matched.length==0){
//                     next({path:"/403"})
//                 }else{
//                     next()
//                 }
//             }else{
//                 store.commit("goToLogin")
//             }
//         }
//     }
// });


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