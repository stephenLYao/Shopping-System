import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/Login';
import Manage from '@/pages/Manage';
import Home from '@/pages/Home';
import UserList from '@/pages/UserList';

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
          component: Home,
          meta: []
        },
        {
          path: '/userList',
          component: UserList,
          meta: ['数据管理', '用户列表']
        }
      ]
    }
  ]
});
