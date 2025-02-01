<template>
    <div>
        <div class="navbar" v-if="!showMobileNav || isLogin">
            <div class="navbar-left">
                <div class="navbar__logo">
                    <img src="@/assets/logo.png" alt="logo" />
                    <span>DataPrep BI</span>
                </div>
                <div class="navbar__menu" v-show="showNavElements">
                    <router-link to="#" class="navbar__menu-item">Clean data</router-link>
                    <router-link to="#" class="navbar__menu-item">Features</router-link>
                    <router-link to="#" class="navbar__menu-item">Contact Us</router-link>
                </div>
            </div>
            <div class="login-menu" v-show="showNavElements">
                <router-link :to="{name:'Login'}" class="navbar__menu-item" v-if="!isLogged">Log In</router-link>
                <router-link :to="{name : 'Signup'}" class="navbar__menu-item signup" v-if="!isLogged">Sign Up</router-link>
            </div>
        </div>

        <div class="mobile-nav" v-if="showMobileNav && !isLogin">
            <img src="@/assets/bars-regular.svg" alt="menu" class="menu-icon" @click="toggleMobileNav = !toggleMobileNav" />
            <transition name="mobile-nav__menu">

                <div class="mobile-nav__menu" v-if="showMobileNav && toggleMobileNav">
                    <img src="../assets/logo.png" alt="" class="logo-DPB">
                    <router-link to="#" class="navbar__menu-item" v-show="showNavElements"> Clean data</router-link>
                    <router-link to="#" class="navbar__menu-item" v-show="showNavElements"> Features </router-link>
                    <router-link to="#" class="navbar__menu-item" v-show="showNavElements"> Contact Us </router-link>
                    <router-link :to="{name:'Login'}" class="navbar__menu-item login" v-show="showNavElements" v-if="!isLogged"> Log In </router-link>
                    <router-link :to="{name : 'Signup'}" class="navbar__menu-item signup" v-show="showNavElements" v-if="!isLogged"> Sign Up </router-link>
                </div>
            </transition>

        </div>
    </div>

</template>

<script>
export default {
    name : "Navbar",

    data() {
        return {
            showMobileNav: false,
            toggleMobileNav: false,
            showNavElements : true,
            isLogin : false,
        }
    },

    props : [ 'isLogged' ],


    created() {
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
    }
}
</script>


<style scoped>

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

        .signup {
            background-color:rgb(237,240,232);
            padding: 10px 20px;
            border-radius: 35px;
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
        }
        .signup {
            background-color:rgb(237,240,232);
            padding: 10px 20px;
            border-radius: 20px;
            width:90%;
            margin:5px 20px;
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