import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path:'/',
        name:'layout',
        component:() => import('@/views/Layout/Layout.vue'),
        meta:{noAuth:true},
        children:[
            {
                path:'/content',
                name:'content',
                component:() => import('@/views/Content/Content.vue'),
            },
            {
                path:'/about',
                name:'about',
                component:() => import('@/views/About/About.vue')
            }
        ],
    },

    {
        path:'/login',
        name:'login',
        meta:{noAuth:false},
        component:() => import('@/views/User/Login.vue'),
    },
    {
        path:'/reg',
        name:'reg',
        meta:{noAuth:false},
        component:() => import('@/views/User/Reg.vue'),
    },

    {
        path:'/:pathMatch(.*)*',
        name:'not fount',
        meta:{noAuth:false},
        component:() => import('@/components/404.vue'),
    }
]


const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router;