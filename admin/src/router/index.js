import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/Login';
import Manage from '@/pages/Manage';
import Home from '@/pages/Home';
import UserList from '@/pages/UserList';
import ProductsList from '@/pages/ProductsList';
import AddProducts from '@/pages/AddProducts';
import Explain from '@/pages/Explain';

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
        },
        {
          path: '/productsList',
          component: ProductsList,
          meta: ['数据管理', '用户列表']
        },
        {
          path: '/addProducts',
          component: AddProducts,
          meta: ['添加数据', '添加商品']
        },
        {
          path: '/explain',
          component: Explain,
          meta: ['说明']
        }
      ]
    }
  ]
});
