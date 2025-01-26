<template>
    <div class="register-container">
        <form action="">
            <div class="toggle-login">
                <p class="login">Log In</p>
                <p class="signup">Sign Up</p>
            </div>
            <div class="input">
                <label for="">First Name </label>
                <input type="text" name="" id="" placeholder="">
            </div>
            <div class="input">
                <label for="">Last Name </label>
                <input type="text" name="" id="" placeholder="">
            </div>
            <div class="input">
                <label for="">Email </label>
                <input type="text" name="" id="" placeholder="">
            </div>
            <div class="input">
                <label for="">Password </label>
                <input type="text" name="" id="" placeholder="">
            </div>
            <div class="input">
                <label for="">Retype Password </label>
                <input type="text"  placeholder="">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name : 'Signup',

}
</script>

<style>
.register-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;


    form{
        width: 400px;
        height:500px;
        display: flex;
        margin-top: 200px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:30px;
        background-color: #fff;
        padding: 60px 0px;
        position: relative;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 200px 0px;

        .toggle-login {
            display: flex;
            position: relative;

            
            .login {
                position: absolute;
                z-index: 101;
                left : 0px;
                top:-60px;
                width:200px;
                padding:  15px 0px;
                margin-top: 0px;

            }

            .signup {
                position: absolute;
                z-index:101;
                right:0px;
                top:-60px;
                width:200px;
                padding: 15px 0px;
                margin-top: 0px;
                background-color: #d1d6d9;
            }
        }

        .input {
            display: flex;
            flex-direction: column;
            gap:10px;
            align-items: start;

            input {
                width : 300px;
                height:25px;
            }
        }
    }
}
</style>