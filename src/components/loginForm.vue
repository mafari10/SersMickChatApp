<template>
  <div class="form-container">
    <h2>Log In</h2>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />

      <button type="submit">Log In</button>
      <div class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin";

export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const { error, login } = useLogin();

    const handleSubmit = async () => {
      // Handle user registration logic here
      await login(email.value, password.value);
      // if no errors redirect using emit
      if (!error.value) {
        context.emit("login");
      }
      // Reset form fields after successful registration
      email.value = "";
      password.value = "";
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style lang="scss" scoped>
</style>