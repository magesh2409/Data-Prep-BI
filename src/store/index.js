import Vue from 'vue';
import Vuex from 'vuex';
import { getAuth } from 'firebase/auth';
import db from '../firebase/firebaseInit';
import { doc , getDoc, updateDoc } from "firebase/firestore";




Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profileFirstName : null,
    profileLastName : null,
    profileEmail : null,
    user : false,
    profileUID : null,
    profileInitials : null,

    contact : {
      phone : "+91 6379412409",
      email : "dataprepbi@gmail.com",
      location : "Vellore , TN , IND"
    }
  },
  mutations: {

    setProfileInfo(state,payload){
      state.profileFirstName = payload.data().firstName,
      state.profileLastName = payload.data().lastName,
      state.profileEmail = payload.data().email,
      state.profileUID = payload.data().id
    },

    setProfileInitial(state){
      console.log("from profile initials")
      console.log(state.profileFirstName , state.profileLastName);
      state.profileInitials = state.profileEmail[0].toUpperCase() + state.profileLastName[0];
      console.log(state.profileInitials);
    },

    changeFirstName(state , payload){
      state.profileFirstName = payload
    },

    changeLastName(state,payload){
      state.profileLastName = payload
    }



  },
  actions: {

    async getCurrentUser({state ,commit}){
      console.log("hello")
      const auth = getAuth();
      const database = doc(db , 'users' , auth.currentUser.uid);
      const dbResults = await getDoc(database);
      if (dbResults.exists()){
        state.user = true;
        commit("setProfileInfo" , dbResults);
        commit("setProfileInitial");
      } else {
        console.log("No Database found")
      }
    },

    async updateUserdata({state , commit}){
      const auth = getAuth();
      const database = doc(db , 'users' , auth.currentUser.uid);
      
      await updateDoc(database ,{
        firstName : state.profileFirstName ,
        lastName : state.profileLastName,
      })
      const dbResults = await getDoc(database);
      commit("setProfileInfo" , dbResults);
      commit("setProfileInitial");
    }
  },
  modules: {}
});
