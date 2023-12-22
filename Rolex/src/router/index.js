import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Productpage from '../views/Productpage.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/Login.vue'
import Winkelmandje from '../views/Winkelmandje.vue'
import Checkoutpage from '../views/Checkoutpage.vue'
import Confirmpage from '../views/Confirmpage.vue'

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
        {
            path: '/Winkelmandje',
            component: Winkelmandje
        },
        {
            path: '/Checkoutpage',
            component: Checkoutpage
        },
        {
            path: '/Confirmpage',
            component: Confirmpage
        },
    ]
})

export default router