import Vue from 'vue';
import Router from 'vue-router';
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import forgotPassword from '@/views/forgotPassword.vue';
import Profile from '@/views/Profile.vue';
import CleanData from '@/views/cleanData.vue';
import contactUs from '@/views/contactUs.vue';



Vue.use(Router);

const routes = [
  {
    path: '/home',
    name : "Home",
    component : Home,
    meta :{
      title : 'Home'
    }
  },
  {
    path : '/signup',
    component : Signup,
    name:"Signup",
    meta :{
      title : 'SignUp'
    }
  },
  {
    path : '/login',
    component : Login,
    name:"Login",
    meta :{
      title : 'Login'
    }
  },
    {
      path : '/forgot-password',
      component : forgotPassword,
      name:"forgotPassword",
      meta :{
        title : 'Forgot Password'
      }
    },
    
    {
      path : '/clean-data',
      component : CleanData,
      name:"CleanData",
      meta :{
        title : 'Clean Data'
      }
    },
    {
      path : '/profile',
      component : Profile,
      name:"Profile",
      meta :{
        title : 'Profile'
      }
    },
    {
      path : '/',
      name:"OpeningPage",
      meta :{
        title : 'Data Prep BI'
      }
    },
    {
      path : '/contact',
      name:"ContactUs",
      component: contactUs,
      meta :{
        title : 'Contact Us'
      }
    },




];

const router = new Router({
  routes,
  mode: 'history'  // Use history mode for cleaner URLs
});

router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title} | DataPrepBI`;
  next();
})
export default router;
