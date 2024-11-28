<script setup></script>

<template>
  <div class="form-layout">
    <div class="form-layout__header">
      <h1>Bienvenido de nuevo!</h1>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.form-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-layout__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 80px;
}
</style>
