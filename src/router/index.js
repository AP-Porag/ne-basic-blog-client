import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleBlog from "../views/SingleBlog";
import WebView from "../views/WebView";
import AuthView from "../views/AuthView";
import SingleCategory from "../views/SingleCategory";
import WritePost from "../views/WritePost";
import Profile from "../views/Profile";

import Login from "../components/Login";
import Signup from "../components/Signup";
import ResetPassword from "../components/ResetPassword";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: WebView,
    children:[
      {
        path:'/',
        name: 'home',
        component: Home,
      },
      {
        path:'/blog/:id',
        name: 'singleBlog',
        component: SingleBlog,
      },
      {
        path:'/category/:id',
        name: 'category',
        component: SingleCategory,
      },
      {
        path:'/write',
        name: 'write',
        component: WritePost,
      },
      {
        path:'/profile',
        name: 'profile',
        component: Profile,
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact')
      }
    ]
  },
  {
    path: '/auth',
    component: AuthView,
    children: [
      {
        path:'/',
        name: 'login',
        component: Login,
      },
      {
        path:'/signup',
        name: 'signup',
        component: Signup,
      },
      {
        path:'/reset-password',
        name: 'reset-password',
        component: ResetPassword,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
