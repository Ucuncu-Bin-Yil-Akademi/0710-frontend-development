<script setup>
const route = useRoute();
console.log(route.params.username);
</script>
<template>
  <h2>This is an user page!</h2>
  <NuxtLink to="/">Go Home Page</NuxtLink>
  <ExampleComponent />
</template>
