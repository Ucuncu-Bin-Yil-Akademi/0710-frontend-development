<script setup>
import { RouterLink } from 'vue-router'

console.log('burası sayfa ilk yüklendiğinde çalışır')
</script>

<template>
  <div>
    <h2>Contact Us</h2>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <textarea placeholder="Message"></textarea>
    <input type="submit" value="Send" />

    <RouterLink to="/">Back to home page</RouterLink>
  </div>
</template>
