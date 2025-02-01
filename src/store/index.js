import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profileFirstName : null,
    profileLastName : null,
    profileEmail : null,
    user : null,
    profileUID : null,
  },
  mutations: {

  },
  actions: {
  },
  modules: {}
});
