<script setup>
import { defineProps, computed } from "vue";

const { variant, loading, disabled } = defineProps({
  label: String,
  variant: {
    type: String,
    default: "primary",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const isDisabled = computed(() => {
  return loading || disabled;
});

const buttonClass = `btn opacity pointer  btn__${variant} ${
  loading ? "loading" : ""
}`;

const emit = defineEmits(["click"]);

const onClick = () => {
  if (isDisabled.value) return;
  emit("click");
};
</script>

<template>
  <button
    :class="buttonClass"
    type="submit"
    :disabled="isDisabled"
    @click="onClick"
  >
    <span v-if="loading">Cargando...</span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<style lang="css" scoped>
.btn {
  background-color: red;
  border: none;
  height: 55px;
  width: 100%;
  border-radius: 35px;
  font-size: 17px;
  font-weight: 600;
}

.btn__primary {
  background-color: #000;
  color: #fff;
}

.btn__secondary {
  background-color: #f3f3f3;
  color: #000;
}

.btn.loading {
  background-color: #ccc;
  color: #fff;
}
</style>
