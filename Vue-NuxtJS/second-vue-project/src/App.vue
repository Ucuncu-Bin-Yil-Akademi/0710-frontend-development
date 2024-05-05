<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <img src="@/assets/logo.svg" height="50" alt="Vue logo" />
    <h2>UBY Akademi</h2>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #cccccc;
  color: rgb(74, 74, 74);
  padding: 20px;
  display: flex;
  align-items: center;
}
</style>
