import Vue from 'vue';
import Router from 'vue-router';

import UserRegistration from '@/components/UserRegistration';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserRegistration',
      component: UserRegistration,
    }
  ]
})