<script setup>
import { ref } from "vue";

defineProps({
  label: String,
  type: String,
});

const { value } = ref("");

const emit = defineEmits(["change"]);

const onChange = (e) => {
  emit("change", e.target.value); // Dispara el evento personalizado
};
</script>

<template>
  <div class="field">
    <label>{{ label }}</label>
    <input
      v-model="value"
      :type="type"
      @change="onChange"
      class="field__input"
    />
  </div>
</template>

<style lang="css" scoped>
.field {
  font-family: "Exo";
  min-height: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
}

.field__input {
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
  outline: none;
}
</style>
