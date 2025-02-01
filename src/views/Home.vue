<template>
    <div class="wrapper">
        <div class="container">
            <div class="left-container">
                <img src="../assets/data.jpg" alt="">
                <h1>Clean Your Data Now?</h1>
                <p> 100% Automatically and Free</p>
            </div>
            <div class="right-container">
                <div class="bg">
                    <label for="data">Upload Your Data</label>
                    <input type="file" accept=".xlsx , .csv" id="data" name="data" >
                    <p> Supported Files : Excel,CSV</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : "Home",
    daat(){
        return {

        }
    },
}

</script>


<style scoped>

.wrapper {
    display: flex;
    flex-direction: column;

    .container {
        display: flex;
        flex-direction: row;
        height:500px;
        @media (max-width : 1000px) {
                flex-direction: column;
                /* align-items: center;
                justify-content: center; */
            }

        .left-container{
            display: flex;
            flex-direction: column;
            flex : 1;
            height : 500px;
            margin : 50px ;
            align-items: center;
            justify-content: center;



            img {
                width: 500px;
                height: 320px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            h1 {
                font-size: 40px;
                color:#454545;
                text-align: center;
            }
            p{
                text-align: center;
            }
        }

        .right-container {
            flex:1;
            display: flex;
            flex-direction: column;
            padding-top:100px;

            .bg {
                background-color:#ffffff;
                margin: 50px;
                border-radius: 20px;
                height:300px;
                padding-top:130px;
                align-items: center;
                justify-content: center;
                box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(69, 69, 69, 0.2) 0px 0px 56px 0px;

                label {
                    background-color: #0f70e6;
                    font-size: 20px;
                    color:#ffffff;
                    border-radius: 30px;
                    border:none;
                    padding:15px 25px;      
                    cursor: pointer;

                    @media (max-width:1000px) {
                        width: 500px;
                        margin: 100px 300px;
                    }
                }
                input {
                    display: none;  

                }
            }
        }

    }
}
</style>