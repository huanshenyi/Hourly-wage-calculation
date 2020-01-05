import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Base from '../pages/base.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'base',
    component: Base,
    redirect: '/index',
    children:[
      {
        path:'/index',
        name:'index',
        component: Index,
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
