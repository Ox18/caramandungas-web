<script setup>
import { ref } from "vue";

import Button from "@/components/Button.vue";
import Field from "@/components/Field.vue";
import Error from "@/components/Error.vue";
import { useLogin } from "../composables/useLogin";

const { loading, login, error } = useLogin();

const email = ref("");
const password = ref("");

const onSubmit = async () => {
  await login(email.value, password.value);
};
</script>

<template>
  <div class="login-form">
    <Field
      v-model="email"
      label="Email"
      type="email"
      @change="email = $event"
    />
    <Field
      v-model="password"
      label="Password"
      type="password"
      @change="password = $event"
    />
    <div class="mt-20">
      <Button
        label="Login"
        variant="primary"
        :loading="loading"
        @click="onSubmit"
      />
    </div>
    <div>
      <Error v-if="error">
        {{ error }}
      </Error>
    </div>
  </div>
</template>

<style lang="css" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem;
}
</style>
