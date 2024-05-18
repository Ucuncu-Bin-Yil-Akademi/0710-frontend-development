<script setup>
import { ref } from "vue";

let checkedNames = ref([]);
let selectedEl = ref("");

const options = ref([
  { text: "A", value: "a" },
  { text: "B", value: "b" },
  { text: "C", value: "c" },
]);
</script>

<template>
  <div>
    <div style="border: 1px solid #252525; padding: 10px; margin: 10px">
      <h2>Check Names: {{ checkedNames }}</h2>
      <input
        type="checkbox"
        id="canberk"
        value="Canberk"
        v-model="checkedNames"
      />
      <label>Canberk</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label>John</label>

      <input type="checkbox" id="jane" value="Jane" v-model="checkedNames" />
      <label>Jane</label>
    </div>

    <div style="border: 1px solid #252525; padding: 10px; margin: 10px">
      <h2>Selected El: {{ selectedEl }}</h2>
      <select v-model="selectedEl">
        <option
          v-for="(currentOption, index) in options"
          :key="index"
          :value="currentOption.value"
        >
          {{ currentOption.text }}
        </option>
      </select>
    </div>
  </div>
</template>
