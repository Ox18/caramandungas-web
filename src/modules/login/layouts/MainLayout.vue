<template>
  <div class="login-main-layout">
    <div>
      <img
        src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center"
      />
    </div>
    <slot></slot>
  </div>
</template>
<style lang="css" scoped>
.login-main-layout {
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 40%;
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
}

.login-main-layout > div:nth-child(1) {
  background-color: #e9e9e9;
}

@media (max-width: 768px) {
  .login-main-layout {
    grid-template-columns: 1fr; /* Solo una columna para ocupar toda la pantalla */
  }

  .login-main-layout > div:nth-child(1) {
    display: none; /* Ocultar el primer div */
  }
}
</style>
