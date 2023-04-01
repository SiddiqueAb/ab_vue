import { createWebHistory, createRouter } from 'vue-router'
import Carousel from "./components/homepage/Carousel.vue";
import Education from "./components/Education.vue";
import Home from "./components/Home.vue";
import Faq from "./components/Faq.vue";
import Pricing from "./components/Pricing.vue";
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
        component: Faq
    }
    ,
    {
        path: '/pricing',
        name: 'pricing',
        component: Pricing
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
    routes,
    linkActiveClass: 'active',
})

export default router;