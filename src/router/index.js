import Vue from 'vue';
import Router from 'vue-router';
import Signup from '@/views/Signup.vue'

Vue.use(Router);

const routes = [
  {
    path: '/',
  },
  {
    path : '/signup',
    component : Signup,
    name:"Signup"
  }

];

const router = new Router({
  routes,
  mode: 'history'  // Use history mode for cleaner URLs
});

export default router;
