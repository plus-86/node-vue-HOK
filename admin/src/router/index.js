import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Main.vue'),
    children: [
      { path: 'categories/edit/:id', component: () => import('@/views/CategoryEdit.vue'), props: true }, // props: true代表获取上个页面放到url上传过来的参数
      { path: 'categories/create', component: () => import('@/views/CategoryEdit.vue') },
      { path: 'categories/list', component: () => import('@/views/CategoryList.vue') },

      { path: 'items/edit/:id', component: () => import('@/views/ItemEdit.vue'), props: true },
      { path: 'items/create', component: () => import('@/views/ItemEdit.vue') },
      { path: 'items/list', component: () => import('@/views/ItemList.vue') },

      { path: 'heroes/edit/:id', component: () => import('@/views/HeroEdit.vue'), props: true },
      { path: 'heroes/create', component: () => import('@/views/HeroEdit.vue') },
      { path: 'heroes/list', component: () => import('@/views/HeroList.vue') },

      { path: 'articles/edit/:id', component: () => import('@/views/ArticleEdit.vue'), props: true },
      { path: 'articles/create', component: () => import('@/views/ArticleEdit.vue') },
      { path: 'articles/list', component: () => import('@/views/ArticleList.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
