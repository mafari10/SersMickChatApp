<template>
  <nav class="chatroom-navbar" v-if="user">
    <ul>
      <li class="greetings">Hey there... {{ user.displayName }}</li>

      <li class="email">Currently logged in with {{ user.email }}</li>
    </ul>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import userLogout from "@/composables/uselogout";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const { user } = getUser();
    const { logout, error } = userLogout();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out successfully");
      }
    };
    return { handleLogout, error, user };
  },
};
</script>

<style lang="scss" scoped>
.chatroom-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #3a86ff;
  color: white;
  font-family: "Anta", sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
}

.chatroom-navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.chatroom-navbar li {
  margin-bottom: 4px;
}

.chatroom-navbar .email {
  font-size: 14px;
  opacity: 0.8;
}

button {
  background-color: white;
  color: #3a86ff;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    transform: translateY(-2px);
  }
}

/* Small device styles */
@media (max-width: 768px) {
  .chatroom-navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }

  .chatroom-navbar ul {
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  .chatroom-navbar .email {
    font-size: 12px;
  }

  button {
    align-self: flex-start;
    margin-top: 12px;
    padding: 6px 12px;
  }
}
/* Small device styles */
@media (max-width: 768px) {
  .chatroom-navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }

  .chatroom-navbar ul {
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  .chatroom-navbar .email {
    font-size: 12px;
  }

  button {
    align-self: flex-end;
    margin-top: 12px;
    padding: 6px 12px;
  }
}
/* Extra small device (mobile) styles */
@media (max-width: 480px) {
  .chatroom-navbar {
    padding: 12px;
  }

  .chatroom-navbar ul {
    gap: 6px;
  }

  .chatroom-navbar .email {
    font-size: 12px;
  }

  button {
    padding: 6px 12px;
    font-size: 14px;
    align-self: flex-end;
  }
}
</style>