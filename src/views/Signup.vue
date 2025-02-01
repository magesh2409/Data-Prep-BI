<template>
    <div class="register-container">
        <div class="upper">
            <h1>Create Your Free Account Now</h1>
            <p class="link">Already have an Account? <router-link :to="{name:'Login'}" class="link">Login</router-link></p>
        </div>
        <form @submit.prevent="signUp">
            <div class="toggle-login">
                <router-link class="login" :to="{name:'Login'}">Log In</router-link>
                <router-link class="signup active" :to="{name:'Signup'}">Sign Up</router-link>
            </div>
            <div class="input">
                <label for="">First Name</label>
                <input type="text" v-model="firstName" placeholder="First Name" />
            </div>
            <div class="input">
                <label for="">Last Name</label>
                <input type="text" v-model="lastName" placeholder="Last Name" />
            </div>
            <div class="input">
                <label for="">Email</label>
                <input type="email" v-model="email" placeholder="Email" />
            </div>
            <div class="input">
                <label for="">Password</label>
                <input type="password" v-model="password" placeholder="Password" />
            </div>
            <div class="input">
                <label for="">Retype Password</label>
                <input type="password" v-model="confirmPassword" placeholder="Retype Password" />
            </div>

            <button type="submit">Sign Up</button>

            <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
        </form>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import db from '../firebase/firebaseInit';

export default {
    name: 'Signup',

    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorMsg: '',
        };
    },

    methods: {
        async signUp() {
            // Field validation
            if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
                this.errorMsg = 'All fields are required.';
                return;
            }

            if (this.password !== this.confirmPassword) {
                this.errorMsg = 'Passwords do not match.';
                return;
            }

            try {
                const auth = getAuth(); // Initialize Firebase Auth
                const createUser = await createUserWithEmailAndPassword(auth, this.email, this.password); // Create user
                const id = createUser.user.uid; // Get user ID

                // Save user data to Firestore
                await setDoc(doc(db, 'users', id), {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                });

                this.$router.push({ name: 'Home' }); // Redirect to login page
            } catch (error) {
                this.errorMsg = error;
            }
        }
    }
}
</script>

<style>
button {
    padding: 10px 30px;
    background-color: rgb(15, 112, 230);
    font-size: 20px;
    color: #fff;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    margin-top: 20px;
}

.link {
    margin: 0px 0px 50px 0px;
    text-decoration: none;
}

.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.upper {
    margin-top: 10px;
}

.upper h1 {
    font-size: 36px;
    color: #454545;
}

form {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background-color: #fff;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    padding-bottom: 100px;
    margin-bottom: 200px;
}

.toggle-login {
    display: flex;
    width: 100%;
}

.login,
.signup {
    flex: 1;
    padding: 15px 0px;
    margin-top: 0px;
    text-decoration: none;
    color: #54616c;
}

.signup.active {
    background-color: #d1d6d9;
}

.input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
}

input {
    width: 300px;
    height: 30px;
    padding: 10px;
}

.error {
    color: red;
    font-size: 14px;
    margin-top: 10px;
}
</style>
