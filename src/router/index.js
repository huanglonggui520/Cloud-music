import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '/src/views/Layout'
// import Home from '@/views/Home'
// import Search from '@/views/Search'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/Layout',
  },
  {
    path:'/layout',
    component:Layout,
    children:[
      {
        path:'/layout',
        redirect:'home'
      },
      {
        path:'home',
        component:()=>import('@/views/Home'),//路由懒加载
        meta:{
          title:'首页'
        }
      },
      {
        path:'search',
        component:()=>import('@/views/Search'),
        meta:{
          title:'搜索'
        }
      },
      
    ]
  },
  {
    path:'/play',
    component:()=>import('@/views/Play')
  },
  {
    path:'/comment',
    name:'comment',
    component:()=>import('@/views/comment')
  }
]

const router = new VueRouter({
  routes
})

export default router
