import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import LogIn from '@/pages/LogIn';
import SignUp from '@/pages/SignUp';
import Carts from '@/pages/Carts';
import Detail from '@/pages/Detail';
import Order from '@/pages/Order';
import Profile from '@/pages/Profile';
import Payment from '@/pages/Payment';

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
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    }
  ]
});
