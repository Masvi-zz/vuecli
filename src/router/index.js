import Vue from 'vue';
import Router from 'vue-router';

import UsersTes from '@/components/UsersTes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UsersTes',
      component: UsersTes,
    }
  ]
})