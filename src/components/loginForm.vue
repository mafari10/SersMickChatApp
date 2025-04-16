<template>
    <div class="form-container">
        <h2>Log In</h2>
        <form @submit.prevent="handleSubmit">
        <label for="email">Email</label>
        <input type="email" id="email"  v-model="email" required>

        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" >

        <button type="submit">Log In</button>
        
        </form>
  </div>
</template>

<script>
    import { ref } from 'vue';
    export default {
        setup() {
            const email = ref('');
            const password = ref('');

            const handleSubmit = () => {
                // Handle user registration logic here
                if(!email.value || !password.value) {
                    alert('Please fill in all fields');
                    return;
                }
                console.log('User LoggedIn:', { email: email.value, password: password.value });
            };
           
            return {
                email,
                password,
                handleSubmit
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>