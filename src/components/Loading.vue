<template>
    <div class="loading">
        <span></span>
    </div>
</template>

<script>
export default {
    name : 'loading',
}
</script>

<style scoped>

.loading {
    top:0px;
    width: 120%;
    height: 100vh;
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    background-color: rgba(0,0,0,0.5);

    @keyframes spin {
        to {

            transform: rotateZ(360deg);
        }
    }

    span {
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto;
        border: 3px solid transparent;
        border-radius: 50%;
        border-top-color: #fff;
        border-bottom-color: #fff;
        animation: spin ease 1000ms infinite;
    }
}

</style>