import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Productpage from '@/views/Productpage.vue'
import ProductDetail from '@/views/ProductDetail.vue'
// import Login from './views/Login'
// import Winkelmandje from './views/Winkelmandje'
// import PageNotFoundView from '@/views/PageNotFoundView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Productpage',
            component: Productpage
        },
        {
            path: '/Productpage/:id',
            name: 'ProductDetail',
            component: ProductDetail
        },
        // {
        //     path: '/:notFound(.*)',
        //     component: PageNotFoundView
        // }
    ]
})

export default router
