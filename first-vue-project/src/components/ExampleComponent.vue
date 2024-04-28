<script setup>
defineProps({
  exampleProp: {
    type: String
  }
})

const fontSizeVar = 32
</script>

<template>
  <h2>My first component</h2>
  <p>Description of component</p>
  <b v-text="exampleProp"></b> - <b>{{ exampleProp }}</b>
  <div :style="{ 'font-size': fontSizeVar + 'px' }">Dinamik inline CSS</div>
</template>

<style scoped></style>
