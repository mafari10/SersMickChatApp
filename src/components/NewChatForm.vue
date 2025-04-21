<template>
  <form class="new-chat-form">
    <textarea
      type="text"
      v-model="message"
      placeholder="Type your message..."
      required
      @keypress.enter.prevent="handleSubmit"
    />
    <button type="submit">Send</button>
  </form>
</template>

  <script>
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";
import { ref } from "vue";
export default {
  setup() {
    // Get user from the store
    const { user } = getUser();
    const message = ref("");

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        sent: timestamp(),
      };
      console.log(chat);
      // Reset the message input field
      message.value = "";
    };

    return { message, handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
.new-chat-form {
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: #f3f3f3;
  border-top: 1px solid #ddd;

  textarea {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 14px;
    resize: none;
    min-height: 50px;
    outline: none;

    &:focus {
      border-color: #3a86ff;
      box-shadow: 0 0 0 3px rgba(58, 134, 255, 0.2);
      background-color: #fff;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #3a86ff;
    border: none;
    color: white;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: #265c9d;
    }
  }
}
</style>