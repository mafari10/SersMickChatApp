<template>
     
    <div> 
        <p class="hello">Welcome to SerMick Chat App</p>
    <div class="welcome container">
        <div v-if="showLogin" >
            <LoginForm/>
            <p>Need an account? <span @click="toggle">Register</span></p>
        </div>
        
        <div v-else>
            <signupForm/>
            <p>Already have an account? <span @click="toggle">Login</span></p>
        </div>
        
    </div>
</div>
</template>

<script >
import LoginForm from '@/components/loginForm.vue';
import signupForm from '@/components/signupForm.vue';
import { ref } from 'vue';
export default {
    components:{signupForm,LoginForm},
    setup() {
        // You can add any setup logic here if needed
        let showLogin = ref(true);

        const toggle = () => {
            showLogin.value = !showLogin.value;
        };
        return {
            showLogin,
            toggle
        };
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anta:wght@400;600&display=swap');

    .welcome {
        max-width: 400px;
        font-family: 'Anta', sans-serif;
        text-align: center;
        padding: 20px 0;
        padding: 40px 20px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        background: linear-gradient(135deg, #4c75e4cc, #cfc8f0);
      }
    .hello {
        margin: 100px auto;
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 30px;
        color: #3A86FF;
        text-align: center;

    }       
    .welcome h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .welcome form{
    margin: 20px auto;
    max-width: 350px;
    padding: 30px;
    border-radius: 20px;
    margin: 20px auto;

    }
    .welcome span{
        color: #00a2ff;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        text-decoration: underline;
    }
    label {
    display: block;
    margin: 16px 0 8px;
    font-weight: 600;
    color: #555;
    text-align: left;
  }
    .welcome span:hover{
       filter: brightness(0.8);
       transition: all 0.3s ease-in-out;
    }
    .welcome label{
       display: block;
         margin: 20px 0 10px;
    }
    .welcome input{
        width: 100%;
        padding: 10px;
        margin: 10px auto;
        border: 1px solid #eee;
        color: #999;
        border-radius: 20px;
        outline: none;
    }
    input {
    width: 100%;
    padding: 12px 16px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 12px;
    background: #f9f9f9;
    font-size: 14px;
    color: #333;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #3A86FF;
      background: #fff;
      box-shadow: 0 0 0 3px rgba(58, 134, 255, 0.2);
    }
  }

  span {
    color: #3A86FF;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: #265c9d;
    }
  }

  p {
    margin-top: 20px;
    font-size: 14px;
    color: #666;
  }



</style>