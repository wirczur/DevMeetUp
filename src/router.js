import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/score',
      name: 'score',
      component: () => import('@/views/Score'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/Settings'),
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import('@/views/Vote'),
    },
  ],
});
