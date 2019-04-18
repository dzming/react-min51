// 引入
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

// 使用
Vue.use(Vuex);

// 核心概念
// 1. store ： 一个用于存储仓库
// 2. state ：状态（数据，相当于组件中的data）
// 3. getters:（理解为组件中的computed，只读）
// 4. mutations ：负责更改state中的数据（同步，理解为组件中的methods）
// 5. actions : 类似于 mutations，负责做异步操作
// * actions用来操作mutations，mutations用来操作state


const store = new Store({
    state: {
        navList: [
            { name: "热卖", path: "/home/hot" },
            { name: "会员特价", path: "/home/vip" },
            { name: "0.99元菜市场", path: "/home/market" },
            { name: "水果", path: "/home/fruit" },
            { name: "时令蔬菜", path: "/home/vegetables" },
            { name: "精品蛋肉", path: "/home/elaborate" },
            { name: "海鲜水产", path: "/home/seafood" },
            { name: "大牌乳品", path: "/home/products" },
            { name: "网红零食", path: "/home/snack" },
            { name: "酒水饮料", path: "/home/beverage" },
            { name: "烘焙糕点", path: "/home/pastry" },
            { name: "方便速食", path: "/home/convenient" },
            { name: "卤味熟食", path: "/home/cooked" },
            { name: "粮油调味", path: "/home/season" },
            { name: "美妆百货", path: "/home/makeup" },
            { name: "囤货专区", path: "/home/stockpiles" },
        ],
        allHome: []
    },
    getters: {

    },
    mutations: {
        getAll(state, data) {
            state.allHome = data
        }
    },
    actions: {

    }
});

export default store;