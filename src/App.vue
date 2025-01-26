<template>
  <div id="app">
    <Navbar v-if="showNav"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  data(){
    return {
      showNav : true,
    }
  },

  components: {
    Navbar
  },

  created(){
    this.checkRoute()
  },

  watch:{
    $route(){
      this.checkRoute();
    },
  },

  methods:{
    checkRoute() {
      let path = this.$route.name;
      if(path === "Signup"){
        this.showNav = false;
      }
      else {
        this.showNav = true;
      }
    },
  },



}
</script>


<style>
#app {
  font-family: open sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
