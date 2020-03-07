//导入router
//导入vue
import Vue from "vue";
import VueRouter from "vue-router";
//动态加载组件
const Home = () => import("../views/home/Home")
const Cart = () => import("../views/cart/Cart")
const Category = () => import("../views/category/Category")
const Profile = () => import("../views/profile/Profile")
//使用vue-router插件
Vue.use(VueRouter);
//定义routers数组
const routes = [{
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  },
];
//定义router
const router = new VueRouter({
  routes,
  mode: "history"
})
//routers 导出
export default router
