import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
// import Products from './views/Products'
// import ProductDetail from './views/ProductDetail'
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
            path: '/Products',
            component: Products
        },
        {
            path: '/Products/:name',
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
