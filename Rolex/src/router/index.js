import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Productpage from '../views/Productpage.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/Login.vue'
// import Winkelmandje from '../views/Winkelmandje.vue'
// import PageNotFoundView from '../views/PageNotFoundView.vue'

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
            path: "/product/:id",
            name: "productDetail",
            component: ProductDetail,
            props: true
        },
        {
            path: '/Login',
            component: Login
        },
        // {
        //     path: '/Winkelmandje',
        //     component: Winkelmandje
        // },
        // {
        //     path: '/:notFound(.*)',
        //     component: PageNotFoundView
        // }
    ]
})

export default router
