import { createWebHistory, createRouter } from 'vue-router'
import Header from '../components/Header.vue'
import HelloWorld from '../components/HelloWorld.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/header', component: Header },
        { path: '/content', component: HelloWorld, meta: { isAuth: true } }
    ]
})

//之前
router.beforeEach((to, from, next) => {
    //验证页面权限
    if (to.meta.isAuth && !localStorage.getItem('user')) {
        router.replace('/')
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