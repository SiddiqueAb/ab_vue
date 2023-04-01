import { createWebHistory, createRouter } from 'vue-router'
import Carousel from "./components/homepage/Carousel.vue";
import Education from "./components/Education.vue";
import Home from "./components/Home.vue";
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: Carousel
    }
    ,
    {
        path: '/faq',
        name: 'faq',
        component: Carousel
    }
    ,
    {
        path: '/pricing',
        name: 'pricing',
        component: Carousel
    }
    ,
    {
        path: '/education',
        name: 'education',
        component: Education
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;