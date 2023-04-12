import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path:'/',
        name:'layout',
        component:() => import('@/views/layout/layout.vue'),
        meta:{noAuth:true},
        children:[
            {
                path:'/content',
                name:'content',
                component:() => import('@/views/content/content.vue'),
            },
            {
                path:'/about',
                name:'about',
                component:() => import('@/views/about/about.vue')
            }
        ],
    },

    {
        path:'/login',
        name:'login',
        meta:{noAuth:false},
        component:() => import('@/views/user/login.vue'),
    },
    {
        path:'/reg',
        name:'reg',
        meta:{noAuth:false},
        component:() => import('@/views/user/reg.vue'),
    },

    {
        path:'/:pathMatch(.*)*',
        name:'not fount',
        meta:{noAuth:false},
        component:() => import('@/components/NotFount/index.vue'),
    }
]


const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router;