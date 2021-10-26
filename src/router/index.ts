import { createWebHistory, createRouter } from 'vue-router'
import Login from '../page/Login.vue'
import Header from '../components/Header.vue'
import HelloWorld from '../components/HelloWorld.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/login', component: Login, props: route => ({
                redirect: route.query.redirect
            })
        },
        { path: '/header/:id', component: Header, props: true },
        { path: '/header', component: Header },
        { path: '/content', component: HelloWorld, meta: { isAuth: true } }
    ]
})

//之前
router.beforeEach((to, from, next) => {
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
    // console.log('beforeEach--->', to, from, next);
})

//之后
router.afterEach(((to, from) => {
    // console.log('afterEach--->', to, from);
}))

export default router