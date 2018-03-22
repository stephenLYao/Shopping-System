import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import LogIn from '@/pages/LogIn';
import SignUp from '@/pages/SignUp';
import Carts from '@/pages/Carts';
import Detail from '@/pages/Detail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/carts',
      name: 'carts',
      component: Carts
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
});
