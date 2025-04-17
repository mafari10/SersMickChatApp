import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    const res = await projectAuth.signOut();
    if (!res) {
      throw new Error("Could not log out");
    }
    return res;
    error.value = null;
  } catch (error) {
    console.log(error.message);
    error.value = error.message;
  }
};

const userLogout = () => {
  return { logout, error };
};

export default userLogout;
