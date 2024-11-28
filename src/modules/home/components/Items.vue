<script setup>
import Button from "@/components/Button.vue";
import { useItems } from "../composables/useItems";

const { loading, fetch, items } = useItems();
</script>

<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-else>
      <Button variant="primary" label="Cargar items" @click="fetch" />
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      Cantidad de items: {{ items.length }}
    </div>
  </div>
</template>
