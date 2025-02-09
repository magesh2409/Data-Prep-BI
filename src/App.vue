<template>
  <div id="app">
    <Navbar v-if="showNav" :isLogged = "isLogged"></Navbar>
    <Front v-if="isFront"></Front>
    <router-view></router-view>
    <Footer v-if="showNav"></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { getAuth , onAuthStateChanged } from 'firebase/auth';
import Front from './components/Front.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  data(){
    return {
      showNav : true,
      isLogged : false,
      isFront : false,
    }
  },

  components: {
    Navbar , Front , Footer
  },

  created(){
    this.checkRoute();
    this.checkLogged();

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

      let address = this.$route.path;
      if (address === "/"){
        this.isFront = true;
      }
      else {
        this.isFront = false;
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
