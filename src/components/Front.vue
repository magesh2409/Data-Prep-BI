<template>
    <div class="front-wrapper">
        <div class="front-left">
            <h1>Transform Your Unclean Data into Clean Data</h1>
            <router-link class="get-started" to="#"> Try For Free</router-link>
        </div>
        <div class="front-right">
            <img src="../assets/data.jpg" alt="">
        </div>

    </div>
</template>

<script>
export default {
    name : "Front"
}
</script>

<style scoped>
.front-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    gap:50px;

    @media (max-width : 1000px) {
        flex-direction: column;
        gap:100px;
    }

    .front-left {
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 42px;
        }

        .get-started {
            padding : 10px 15px;
            background-color: #0f70e6;
            border: 0px none solid;
            text-decoration: none;
            border-radius: 15px;
            color : #fff;

        }
    }

    .front-right {
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            margin-right: 32PX;

            @media (max-width :1000px) {
                width: 80%;
            }
        }
    }
}
</style>