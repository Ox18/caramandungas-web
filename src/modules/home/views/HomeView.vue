<script setup>
import Button from "@/components/Button.vue";
import Items from "../components/Items.vue";
import { useLogout } from "../composables/useLogout";

const { logout } = useLogout();

const handleLogout = () => {
  logout();
};
</script>
<template>
  <div class="homeView">
    <div class="homeView__content">
      <Button variant="secondary" label="Cerrar sesión" @click="handleLogout" />
      <Items />
    </div>
  </div>
</template>

<style lang="css" scoped>
.homeView {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.homeView__content {
  min-width: 600px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
</style>
