import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAZ4QsCUvMr4asGeGACFQAVVzPVlK4oZTI",
  authDomain: "dataprep-bi.firebaseapp.com",
  projectId: "dataprep-bi",
  storageBucket: "dataprep-bi.firebasestorage.app",
  messagingSenderId: "55151914100",
  appId: "1:55151914100:web:2fd56298bc95daf4737521"
};


initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');