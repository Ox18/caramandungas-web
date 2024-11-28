import { useRouter } from "vue-router";

export function useLogout() {
  const router = useRouter();

  const logout = () => {
    sessionStorage.removeItem("access_token");
    router.push({ name: "login" });
  };

  return {
    logout,
  };
}
