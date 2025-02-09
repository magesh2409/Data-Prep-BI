<template>
    <div class="footer-wrapper">
        <div class="left">
            <img src="../assets/instagram-brands.svg" alt="">
            <img src="../assets/linkedin-brands.svg" alt="">
            <img src="../assets/twitter-brands.svg" alt="">
        </div>
        <div class="middle">
            <router-link class="contact" :to="{name : 'ContactUs'}">CONTACT US</router-link>
        </div>
        <div class="right">
            ALL RIGHTS ARE RESERVED
        </div>

    </div>
</template>

<script>
export default {
    name : 'Footer'
}
</script>

<style scoped>

.footer-wrapper {
    margin-top : 100px;
    background-color : #303030;
    display: flex;
    padding:50px 20px;

    .left {
        flex:1;
        display: flex;
        gap:30px;
        align-items: center;
        justify-content: center;

        img {
            width : 20px;
        }
    }

    .middle {
        flex:1;
        color:#fff;

        .contact {
            text-decoration: none;
            color: #fff;
        }
    }

    .right {
        flex:1;
        color:#fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>