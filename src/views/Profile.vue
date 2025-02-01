<template>
    <div class="profile-wrapper">
        <Loading v-show="isLoading"></Loading>
        <h1> Edit Your Details</h1>
        <div class="container">
            <div class="inputs">
                <p>First Name</p>
                <input type="text"  v-model="firstName">
            </div>
            <div class="inputs">
                <p>Last Name</p>
                <input type="text" v-model="lastName">
            </div>
            <div class="inputs">
                <p>Email</p>
                <input type="text" :value="email" disabled >
            </div>

            <button @click="handleUpdate">Update</button>
        </div>
    </div>
</template>

<script>

import Loading from '@/components/Loading.vue';

export default{
    name : "profile",

    data() {
        return {
            email : this.$store.state.profileEmail,
            isLoading : false,
        }
    },

    components : { Loading },

    computed : {
        firstName :{
            get(){
                return this.$store.state.profileFirstName
            },
            set(payload){
                this.$store.commit("changeFirstName" , payload);
            }
        },
        lastName :{
            get(){
                return this.$store.state.profileLastName
            },
            set(payload){
                this.$store.commit("changeLastName" , payload);

            }
        }
    },

    methods : {
        handleUpdate(){
            this.isLoading = true;
            this.$store.dispatch('updateUserdata');
            this.isLoading = false;
        }
    }
}

</script>

<style scoped>

.profile-wrapper {
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;


    .container {
        padding:50px 80px;
        margin-bottom: 200px;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;

    }
}
</style>