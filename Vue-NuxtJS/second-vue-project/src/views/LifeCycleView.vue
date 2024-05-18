<script setup>
import { onBeforeUpdate, ref, onBeforeUnmount } from "vue";
import ContentCard from "../components/ContentCard.vue";
import { RouterLink } from "vue-router";

let counter = ref(0);
onBeforeUpdate(() => {
  console.log("Birazdan component update edilecek yani tekrar render edilecek");
});

onBeforeUnmount(() => {
  console.log("Birazdan sayfa unmount olacak");
});
</script>

<template>
  <div style="margin: 50px">
    <h2>Hello world!</h2>
    <RouterLink to="/">Anasayfa</RouterLink>
    <h1>{{ counter }}</h1>
    <button @click="counter++">Arttır</button>
    <ContentCard>
      <template #title>
        <h2>Card Title</h2>
        <h4>Card Subtitle</h4>
      </template>
      <template #body>
        <p>body</p>
      </template>
    </ContentCard>
  </div>
</template>

<style scoped></style>
