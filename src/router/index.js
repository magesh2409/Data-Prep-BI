import Vue from 'vue';
import Router from 'vue-router';
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import forgotPassword from '@/views/forgotPassword.vue';

Vue.use(Router);

const routes = [
  {
    path: '/home',
    name : "Home",
    component : Home
  },
  {
    path : '/signup',
    component : Signup,
    name:"Signup"
  },
  {
    path : '/login',
    component : Login,
    name:"Login"
  },
    {
      path : '/forgot-password',
      component : forgotPassword,
      name:"forgotPassword"
    },

];

const router = new Router({
  routes,
  mode: 'history'  // Use history mode for cleaner URLs
});

export default router;
