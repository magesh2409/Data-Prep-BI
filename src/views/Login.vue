<template>
    <div class="register-container">
        <div class="upper">
            <h1>Login To Your Account Now</h1>
            <p class="link">New to DataPrepBI? <router-link :to="{name:'Signup'}" class="link">Sign Up</router-link></p>
        </div>
        <form action="">
            <div class="toggle-login">
                <router-link class="login active" :to="{name:'Login'}">Log In</router-link>
                <router-link class="signup " :to="{name:'Signup'}">Sign Up</router-link>
            </div>
            <div class="input">
                <label for="">Email </label>
                <input type="text" name="" id="" placeholder="" v-model="email">
            </div>
            <div class="input">
                <label for="">Password </label>
                <input type="password" name="" id="" placeholder="" v-model="password" >
            </div>
            <button @click.prevent="login">Login</button>
            <p v-if="this.error" >{{ this.errorMsg }}</p>

            <router-link class="forgot-password link" :to="{name : 'forgotPassword'}">Forgot Password?</router-link>
        </form>
    </div>
</template>

<script>
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';


export default {
    name : 'Login',

    data(){
        return {
            email : null,
            password : null,
            error : false,
            errorMsg : null,
        }
    },

    methods : {
        login(){
            const auth = getAuth();
            signInWithEmailAndPassword(auth , this.email , this.password)
            .then(() => {
                this.error = false;
                this.errorMsg = null;
                this.$router.push({name : 'Home'})
            })
            .catch((err) => {
                this.error = true;
                this.errorMsg = err.message;
            })

        },
    },

}
</script>

<style>
.active {
    background-color: #d1d6d9;
    
}
</style>
