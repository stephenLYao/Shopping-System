import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/Login';
import Manage from '@/pages/Manage';
import Home from '@/pages/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage,
      children: [
        {
          path: '/',
          component: Home
        }
      ]
    }
  ]
});
