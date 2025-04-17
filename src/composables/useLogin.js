import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  // reset error every time login is called
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Could not complete login");
    }
    error.value = null;
    return res;
  } catch (err) {
    error.value = "Invalid login credentials";
    // error.value = err.message;
    console.log(err.message);
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
