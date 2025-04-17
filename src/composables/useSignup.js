import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const signUp = async (email, password, name) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete signup");
    }
    await res.user.updateProfile({ displayName: name });
    error.value = null;
    return res.user;
  } catch (err) {
    error.value = err.message;
  }
};

const useSignUp = () => {
  return { error, signUp };
};
export default useSignUp;
