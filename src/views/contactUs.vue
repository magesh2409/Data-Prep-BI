<template>
    <div class="contact-wrapper">
        <Loading v-if="isLoading"></Loading>
        <p v-if="error" class="error" :class="{'email-status' : this.isEmailSent }">{{ this.errorMsg }}</p>

        <div class="contact-details">
            <h1>Contact Us</h1>
            <div class="contact-list">
                <div class="list">
                    <img src="../assets/phone.png" alt="" class="icon email">
                    {{ this.$store.state.contact.phone }}
                </div>
                <div class="list">
                    <img src="../assets/mail.png" alt="" class="icon">
                    {{ this.$store.state.contact.email }}
                </div>
                <div class="list">
                    <img src="../assets/location.png" alt="" class="icon">
                    {{ this.$store.state.contact.location }}
                </div>
            </div>
        </div>
        <div class="enter-message">
            <div class="header">
                <h1>
                    Get In Touch
                </h1>
                <p> Feel Free To Drop A Message</p>
            </div>
            <div class="message">
                <input type="text" name="name" placeholder="Name" v-model="name">
                <input type="text" name="email" id="" placeholder="Email" v-model="email">
                <input type="text" name="message" id="" placeholder="Message" v-model="message">
                <button @click.prevent="sendEmail">Send Message</button>
            </div>
        </div>
    </div>
</template>

<script>

import emailjs from 'emailjs-com';
import Loading from '@/components/Loading.vue';
export default {
    name : "contactUs",

    data(){
        return {
            name : null,
            email:null,
            message : null,
            error : false,
            errorMsg : null,
            isLoading : false,

            isEmailSent : false,

        }
    },

    components : { Loading},

    methods : {
        sendEmail(){
            if(this.name === null || this.email === null || this.message === null){
                this.errorMsg = "Enter all required fields";
                this.error = true;
                setTimeout(() =>{
                    this.error = false;
                },5000)
                return;
            }
            this.isLoading = true;

            const templateParams = {
                from_name : this.name,
                from_email : this.email,
                to_email : "dataprepbi@gmail.com",
                reply_to : this.eamil,
                message : this.message,
            };

            emailjs.send( 
                "service_p3ja93a",
                "template_qopd72i",
                templateParams,
                "Le8_IPP0DOHhskjUq"
            )
            .then(()=>{
                this.isEmailSent = true;
                setTimeout(()=>{
                    this.isLoading = false;
                },3000);
                this.error = true;
                this.errorMsg = "Email Sent Succesfully";


                
                this.name = "";
                this.email = "";
                this.message = "";
                
                setTimeout(()=>{
                    this.error = false;
                    this.errorMsg = "";
                    this.isEmailSent = false;
                },5000)
            })
            .catch((err)=>{
                this.isEmailSent = false;
                setTimeout(()=>{
                    this.isLoading = false;
                },3000);


                this.error = true;
                this.errorMsg = err;

                setTimeout(()=> {
                    this.error = false;
                    this.errorMsg = "";
                },5000)

            })
            

        }
    },
}
</script>

<style scoped>


.error {
    width:100%;
    padding-top :10px;
    padding-bottom: 10px;
    background-color: #303030;
    color:#fff;
}
.email-status {
    background-color: green;
    color:#fff;
}

.contact-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-left: 100px;
/* 
    @media (max-width:1000px) {
        flex-direction: column;
    } */

    .contact-details {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        background-color:black;
        padding: 100px 100px;
        color:#fff;
        height:418px;

        .contact-list {
            display: flex;
            flex-direction: column;
            gap:32px;
            align-items: start;

            .list {
                display: flex;
                flex-direction: row;
                gap:10px;
                align-items: center;
                justify-content: center;

                .icon {
                    width: 30px;
                    height: 25px;
                }


            }
        }
    }

    .enter-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border: 0px solid black;
        padding : 50px 150px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        /* margin-left: auto; */
        

        .header {
            display: flex;
            flex-direction: column;
        }

        .message {
            display: flex;
            flex-direction: column;
            gap:50px;

            input{

                font-size: 15px;
                font-weight: 400;
            }
        }
    }
}
</style>