<template>
  <div class="form-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="registerUser">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Register</button>
      <div class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useSignUp from "@/composables/useSignup";
export default {
  setup(props, context) {
    // Importing the useSignUp composable
    const { error, signUp } = useSignUp();

    // Defining reactive variables for form inputs
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const registerUser = async () => {
      // Handle user registration logic here
      await signUp(email.value, password.value, name.value);

      // Reset form fields after successful registration
      name.value = "";
      email.value = "";
      password.value = "";
      if (!error.value) {
        context.emit("signup");
      }
    };

    return { name, email, password, registerUser, error };
  },
};
</script>

<style lang="scss" scoped>
</style>