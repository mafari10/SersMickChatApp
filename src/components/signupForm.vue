<template>
    <div class="form-container">
        <h2>Sign Up</h2>
        <form @submit.prevent="registerUser">
        <label for="name">Name</label>
        <input type="text" id="name"  v-model="name" required>

        <label for="email">Email</label>
        <input type="email" id="email"  v-model="email" required>

        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>

        <button type="submit">Register</button>
      
        </form>
  </div>
</template>

<script>
    import { ref } from 'vue';
    import useSignUp from '@/composables/useSignup';
    export default {
        setup() {
            // Importing the useSignUp composable
            const {error,signUp} = useSignUp();
            const name = ref('');
            const email = ref('');
            const password = ref('');

            const registerUser = () => {
                // Handle user registration logic here
                console.log('User registered:', { name: name.value, email: email.value, password: password.value });
            };
           
            return {
                name,
                email,
                password,
                registerUser
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>