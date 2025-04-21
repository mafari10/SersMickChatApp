<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NewChatForm from "@/components/NewChatForm.vue";
import getUser from "@/composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { Navbar, NewChatForm },
  setup() {
    // get user
    const { user } = getUser();
    const router = useRouter();
    // check if user is logged in
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>