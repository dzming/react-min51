import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Home from '../pages/Home'
import Designer from '../pages/Designer'
import NotFound from '../pages/NotFound'
import Fund from '../pages/Fund'
import Me from '../pages/Me'
import Login from '../pages/Login'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'
import Register from '../pages/Register'
import Mine from '../pages/Mine'

// Home的嵌套路由
import Hot from '../homepages/Hot.vue'
import Vip from '../homepages/Vip.vue'
import Market from '../homepages/Market.vue'
import Fruit from '../homepages/Fruit.vue'
import Vegetables from '../homepages/Vegetables.vue'
import Elaborate from '../homepages/Elaborate.vue'
import Seafood from '../homepages/Seafood.vue'
import Products from '../homepages/Products.vue'
import Snack from '../homepages/Snack.vue'
import Beverage from '../homepages/Beverage.vue'
import Pastry from '../homepages/Pastry.vue'
import Convenient from '../homepages/Convenient.vue'
import Cooked from '../homepages/Cooked.vue'
import Season from '../homepages/Season.vue'
import Makeup from '../homepages/Makeup.vue'
import Stockpiles from '../homepages/Stockpiles.vue'



let router = new VueRouter({
    mode:'history',
    routes: [
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {
            path: '/', //重定向：当浏览器url地址为/,自动跳转到/home
            redirect: '/home'
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,
            children: [{
                path: '',
                redirect: 'hot'
            }, {
                path: 'hot',
                component: Hot
            }, {
                path: 'vip',
                component: Vip
            }, {
                path: 'market',
                component: Market
            }, {
                path: 'fruit',
                component: Fruit
            }, {
                path: 'vegetables',
                component: Vegetables
            }, {
                path: 'elaborate',
                component: Elaborate
            }, {
                path: 'seafood',
                component: Seafood
            }, {
                path: 'products',
                component: Products
            }, {
                path: 'snack',
                component: Snack
            }, {
                path: 'beverage',
                component: Beverage
            }, {
                path: 'pastry',
                component: Pastry
            }, {
                path: 'convenient',
                component: Convenient
            }, {
                path: 'cooked',
                component: Cooked
            }, {
                path: 'season',
                component: Season
            }, {
                path: 'makeup',
                component: Makeup
            }, {
                path: 'stockpiles',
                component: Stockpiles
            }]
        },
        {
            name: 'Designer',
            path: '/designer',
            component: Designer
        },
        {
            name: 'Me',
            path: '/me',
            component: Me,
        },
        {
            name: 'Detail',
            path: '/detail',
            component: Detail,
        },
        {
            name: 'Cart',
            path: '/cart',
            component: Cart,
        },
        {
            name:'Fund',
            path:'/fund',
            component:Fund
        },
        {
            name:'Login',
            path:'/login',
            component:Login
        },
        {
            name:'Register',
            path:'/register',
            component:Register
        },
        {
            name:'Mine',
            path:'/mine',
            component:Mine
        },
        // 404
        {
            path: '*',
            component: NotFound
        }
    ]
});

export default router;