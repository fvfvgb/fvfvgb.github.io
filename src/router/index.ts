import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import BasicLayout from '~/layouts/BasicLayout.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        meta: {title: '首页'},
        component: BasicLayout,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                meta: {title:'首页',icon:'icon-dashboard'},
                component: ()=>import("~/views/Home.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router