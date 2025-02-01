<template>
    <div class="register-container">
        <Loading v-if="isLoading"></Loading>
        <div class="upper">
            <h1>Reset Your Password</h1>
            <p class="link">Know Your Password? <router-link :to="{name:'Login'}" class="link">log In</router-link></p>
        </div>
        <form action="">
            <div class="input">
                <label for="">Email </label>
                <input type="text" name="" id="" placeholder="" v-model="email">
            </div>

            <button @click.prevent="resetPassword">Reset</button>
            <p v-if="this.messageActive" >{{ this.message }}</p>

            <router-link class="forgot-password link" :to="{name : 'Login'}">Login</router-link>
        </form>
    </div>
</template>

<script>
import { getAuth , sendPasswordResetEmail } from 'firebase/auth';
import Loading from '../components/Loading.vue';


export default {
    name : 'Login',

    components : { Loading },

    data(){
        return {
            email : null,
            message : "",
            messageActive : null,
            isLoading  : false,
        }
    },

    methods : {
        resetPassword(){
            this.isLoading = true;

            const auth = getAuth();
            sendPasswordResetEmail(auth , this.email)
            .then(()=> {
                    this.messageActive = true;
                    this.message = "If your account exists you will receive an email shortly";
                    this.isLoading = false;
                
            })
            .catch((err) => {
                this.messageActive = true;
                this.message = err.message;
                this.isLoading = false;
            })
        },
    }


}
</script>

<style scoped>
.input {
    padding-top: 50px;
    margin-bottom: 20px;
}

form {
    margin-bottom: 200px;
    padding-bottom: 0px;
    padding-left: 30px;
    padding-right: 30px;
}
</style>


