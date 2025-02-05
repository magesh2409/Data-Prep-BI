import Vue from 'vue';
import Router from 'vue-router';
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import forgotPassword from '@/views/forgotPassword.vue';
import Profile from '@/views/Profile.vue';
import CleanData from '@/views/cleanData.vue';


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
    
    {
      path : '/clean-data',
      component : CleanData,
      name:"CleanData"
    },
    {
      path : '/profile',
      component : Profile,
      name:"Profile"
    },
    {
      path : '/',
      name:"OpeningPage",
    },




];

const router = new Router({
  routes,
  mode: 'history'  // Use history mode for cleaner URLs
});

export default router;
