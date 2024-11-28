import { ref } from "vue";
import { useRouter } from "vue-router";

import Api from "@/api/base";

export function useLogin() {
  const isLogin = ref(false);
  const loading = ref(false);
  const error = ref("");

  const router = useRouter(); // Obtén acceso al router

  const login = async (username, password) => {
    error.value = "";
    try {
      loading.value = true;
      const response = await Api.login(username, password);
      const { access_token } = response.data;

      // session storage
      sessionStorage.setItem("access_token", access_token);

      error.value = "";
      isLogin.value = true;
      // router to route 'home is name route
      router.push({ name: "home" });
    } catch (ex) {
      error.value = ex.response.data.detail;
    } finally {
      loading.value = false;
    }
  };

  return {
    isLogin,
    login,
    loading,
    error,
  };
}
