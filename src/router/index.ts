import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Header from '@/components/Header.vue'
import Admin from "@/views/Admin.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/login', component: Login, props: route => ({
            redirect: route.query.redirect
        })
    },
    { path: '/header/:id', component: Header, props: true },
    { path: '/header', component: Header },
    { path: '/admin', component: Admin, meta: { isAuth: true } },
    { path: '/notFound', component: NotFound, props: route => { return { toPath: route.query.toPath } } }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//之前
router.beforeEach((to, from, next) => {
    if (to.matched.length !== 0) {
        //验证页面权限
        if (to.matched.some(record => record.meta.isAuth) && !localStorage.getItem('user')) {
            //router.replace('/')
            next({
                path: '/login',
                //将跳转的路由path作为参数，登录成功后跳转到该路由
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next({
            path: '/notFound',
            query: { toPath: to.fullPath }
        })
    }
})

//之后
router.afterEach(((to, from) => {
}))

export default router
