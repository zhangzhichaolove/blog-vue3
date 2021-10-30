import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/Blog.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/login', component: () => import('@/views/Login.vue'), props: route => ({
            redirect: route.query.redirect
        })
    },
    { path: '/header/:id', component: () => import('@/components/Header.vue'), props: true },
    { path: '/header', component: () => import('@/components/Header.vue') },
    {
        path: '/admin', component: () => import('@/views/Admin.vue'), meta: { isAuth: true },
        children: [
            {
                path: '/admin/blogEdit',
                name: 'BlogEdit',
                meta: { title: '发布文章' },
                component: () => import('@/components/BlogEdit.vue')
            },
            {
                path: '/admin/copyright',
                name: 'Footer',
                meta: { title: '打开版权' },
                component: () => import('@/components/Footer.vue')
            }
        ]
    },
    { path: '/notFound', component: () => import('@/views/NotFound.vue'), props: route => { return { toPath: route.query.toPath } } }
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
