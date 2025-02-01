<template>
  <div id="app">
    <Navbar v-if="showNav" :isLogged = "isLogged"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { getAuth , onAuthStateChanged } from 'firebase/auth';


export default {
  name: 'App',
  data(){
    return {
      showNav : true,
      isLogged : false,
    }
  },

  components: {
    Navbar
  },

  created(){
    this.checkRoute();
    this.checkLogged()

  },

  mounted() {
    this.checkLogged()
  },

  watch:{
    $route(){
      this.checkRoute();
      this.checkLogged()

    },
  },

  methods:{
    checkRoute() {
      let path = this.$route.name;
      if(path === "Signup" || path == "Login" || path === "forgotPassword"){
        this.showNav = false;
      }
      else {
        this.showNav = true;
      }
    },

    checkLogged(){
      const auth = getAuth();
      onAuthStateChanged(auth , (user) => {
        if (user){
          this.isLogged = true;
          this.$store.dispatch('getCurrentUser');
        
        } else {
          this.isLogged = false;
        }
      })
    },
  },



}
</script>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;

}
</style>
