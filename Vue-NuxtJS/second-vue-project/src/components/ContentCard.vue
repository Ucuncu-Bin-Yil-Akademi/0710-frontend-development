<script setup></script>

<template>
  <div>
    <div class="card">
      <slot name="title"></slot>
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #252525;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
