<script setup>
import { ref, reactive, watch, computed } from "vue";
let counter1 = 0;
let counter2 = ref(0);
let countsArray = reactive([]);
let counter3 = ref(0);
let counter4 = computed(() => {
  return counter3.value + counter2.value;
});

console.log("Burası sayfa ilk yüklenirken çalışır.");

const increaseCounter1 = () => {
  counter1 = counter1 + 1;
};

const increaseCounter2 = () => {
  counter2.value = counter2.value + 1;
};

const pushToArray = () => {
  countsArray.push(counter2.value);
};

watch(counter2, (newValue, oldValue) => {
  console.log(`counter2'nin değeri ${oldValue} iken ${newValue} oldu.`);
  counter3.value = newValue + oldValue;
});
</script>

<template>
  <main class="mainWrapper">
    <div>
      <h1>Counter1: {{ counter1 }}</h1>
      <button @click="increaseCounter1">Arttır</button>
      <button @click="counter1++">Azalt</button>
    </div>
    <hr />
    <div>
      <h1>Counter2: {{ counter2 }}</h1>
      <button @click="increaseCounter2">Arttır</button>
      <button @click="counter2++">Azalt</button>
    </div>
    <hr />
    <div>
      <button @click="pushToArray">Array'e Ekle</button>
      <ul>
        <li v-for="countValue in countsArray">
          {{ countValue }}
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <h2>Watch: {{ counter3 }} #Counter3</h2>
      <h2>Computed: {{ counter4 }} #Counter4</h2>
    </div>
  </main>
</template>

<style scoped>
.mainWrapper {
  padding: 20px;
}
</style>
