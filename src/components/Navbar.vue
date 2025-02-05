<template>
    <div>
        <div class="navbar" v-if="!showMobileNav || isLogin">
            <div class="navbar-left">
                <div class="navbar__logo" >
                    <img src="@/assets/logo.png" @click="directToOpeningPage"   alt="logo" />
                    <span @click="directToOpeningPage">DATAPREP BI</span>
                </div>
                <div class="navbar__menu" v-show="showNavElements">
                    <router-link to="#" class="navbar__menu-item">CLEAN DATA</router-link>
                    <router-link to="#" class="navbar__menu-item">FEATURES</router-link>
                    <router-link to="#" class="navbar__menu-item">CONTACT US</router-link>
                </div>
            </div>
            <div class="login-menu" v-show="showNavElements">
                <router-link :to="{name:'Login'}" class="navbar__menu-item" v-if="!isLogged">LOG IN</router-link>
                <router-link :to="{name : 'Signup'}" class="navbar__menu-item signup" v-if="!isLogged">SIGN UP</router-link>
                <p v-if="isLogged" class="initial" @click="showAccount = !showAccount">{{ this.initials }}</p>
                <div class="account-details" v-if="showAccount && isLogged">
                    <router-link :to="{name:'Profile'}" class="profile">Profile</router-link>
                    <p @click="signoutAccount" >Sign Out</p>
                </div>

            </div>
        </div>

        <div class="mobile-nav" v-if="showMobileNav && !isLogin">
            <img src="@/assets/bars-regular.svg" alt="menu" class="menu-icon" @click="toggleMobileNav = !toggleMobileNav" />
            <transition name="mobile-nav__menu">

                <div class="mobile-nav__menu" v-if="showMobileNav && toggleMobileNav">
                    <img src="../assets/logo.png" alt="" class="logo-DPB" @click="directToOpeningPage">
                    <div class="logo">
                        <p v-if="isLogged" class="initial" @click="showAccount = !showAccount">{{ initials }}</p>
                        <p>{{ this.$store.state.profileEmail }}</p>

                    </div>
                    <router-link to="#" class="navbar__menu-item" v-show="showNavElements"> CLEAN DATA</router-link>
                    <router-link to="#" class="navbar__menu-item" v-show="showNavElements"> FEATURES </router-link>
                    <router-link to="#" class="navbar__menu-item" v-show="showNavElements"> CONTACT US </router-link>
                    <router-link :to="{name:'Login'}" class="navbar__menu-item" v-show="showNavElements" v-if="!isLogged"> LOG IN </router-link>
                    <router-link :to="{name : 'Signup'}" class="navbar__menu-item signup" v-show="showNavElements" v-if="!isLogged"> SIGN UP </router-link>
                    <p @click="signoutAccount" class="signout-mobile">SIGN OUT</p>
                </div>
            </transition>

        </div>
    </div>

</template>

<script>
import { getAuth } from 'firebase/auth';
export default {
    name : "Navbar",

    data() {
        return {
            showMobileNav: false,
            toggleMobileNav: false,
            showNavElements : true,
            isLogin : false,

            initials : this.$store.state.profileInitials,
            showAccount : false,
        }
    },

    props : [ 'isLogged' ],


    created() {
        console.log(this.initals)
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        this.disableNav()
    },

    watch:{
        $route(){
            this.disableNav()
        }
    },

    methods: {
        handleResize() {
            if(window.innerWidth < 1000) {
                this.showMobileNav = true;
            } else {
                this.showMobileNav = false;
            }
        },

        disableNav(){
            let path = this.$route.name;
            if (path === "Signup" || path ==="Login"){
                this.showNavElements = false;
                this.isLogin = true;
            }
        },

        signoutAccount(){
            const auth = getAuth();
            auth.signOut();
            window.location.reload();
        },

        directToOpeningPage() {
            this.$router.push({name:'OpeningPage'})
        }
    }
}
</script>


<style scoped>

.initial {
    width : 45px;
    height : 45px;
    border-radius: 50%;
    background-color: #edf0f2; 
    display: flex;
    align-items: center;
    justify-content: center; 
    cursor: pointer; 
    /* padding-top: 5px; */
}

.signout-mobile {
    cursor: pointer;
}

.profile {
    text-decoration: none;
  color: #2c3e50;

}

.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        }
.navbar__menu-item {
    color : rgb(69,69,69);
    text-decoration: none;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 0px solid rgb(69,69,69);
    font-size: 16px;
    font-weight: 500;
    background-color: #fff;
    color: rgb(69,69,69);

    .navbar-left {
        display: flex;
        align-items: center;
        gap:70px;
        .navbar__logo {
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
                width: 100px;
                height:60px;
            }
        }

        .navbar__menu {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap:60px;
        }
    }

    .login-menu {
        display: flex;
        align-items: center;
        gap:50px;
        position: relative;
        

        .signup {
            background-color:rgb(237,240,232);
            padding: 10px 20px;
            border-radius: 35px;
        }

        .account-details {
            position: absolute;
            width:100px;
            height:100px;
            background-color: #ffffff;
            z-index: 1000;
            left:-30px;
            top:70px;
        }
        p {
            cursor: pointer;
        }

    }

}


.mobile-nav {
    display: flex;
    flex-direction: column;
    gap:20px;
    margin-left: auto;
    height:100%;
    width:100vh;
    position: relative;



    .menu-icon {
        width: 25px;
        height: 25px;
        margin: 20px;
        position: absolute;
        margin-left: auto;
        z-index: 102;
        right:-20px;
        cursor: pointer;
        z-index: 250;
    }

    .mobile-nav__menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:20px;
        position: fixed;
        width:100%;
        height: 100%;
        left:0;
        top:20px;
        z-index: 200;
        background-color: #fff;


        .logo-DPB {
            padding:0px 20px;
            width:70px;
            height:auto;
            cursor: pointer;
        }

        .navbar__menu-item {
            color : rgb(69,69,69);
            text-decoration: none;
            border-bottom: 3px solid rgb(237,240,242);
            width:100%;
            padding:20px;
            }
        .login {
            border-bottom: none;
            padding-bottom: 0px;
            margin-bottom: 0px;
            height:30px;
        }
        .signup {
            background-color:rgb(237,240,232);
            padding-bottom: 0px;
            border-radius: 20px;
            width:85%;
            height:30px;
            margin:5px 20px 140px 20px;
            padding-bottom: 15px;
        }
    }


    .mobile-nav__menu-enter-active, .mobile-nav__menu-leave-active {
        transition: all 0.5s ease; 
    }

    .mobile-nav__menu-enter {
        transform: translateX(-100%);
    }

    .mobile-nav__menu-enter-to {
        transform: translateX(0);
    }

    .mobile-nav__menu-leave {
        transform: translateX(0);
    }

    .mobile-nav__menu-leave-to {
        transform: translateX(-100%);
    }

}


</style>