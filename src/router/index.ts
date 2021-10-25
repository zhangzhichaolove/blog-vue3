import { createWebHistory, createRouter } from 'vue-router'
import Header from '../components/Header.vue'
import HelloWorld from '../components/HelloWorld.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/header', component: Header },
        { path: '/content', component: HelloWorld }
    ]
})

export default router