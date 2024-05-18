<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = computed(() => {
  return store.state.count;
});

console.log(store.state.count);

const increateCounter = () => {
  store.commit("increment");
};

const resetCounter = () => {
  store.commit("resetCount");
};
</script>

<template>
  <div>
    <h2>hello</h2>
    <h2
      style="
        font-size: 42px;
        background-color: rgb(227, 158, 30);
        text-align: center;
      "
    >
      {{ count }}
    </h2>
    <button @click="increateCounter">Arttır</button>
    <button @click="resetCounter">Reset</button>
  </div>
</template>
