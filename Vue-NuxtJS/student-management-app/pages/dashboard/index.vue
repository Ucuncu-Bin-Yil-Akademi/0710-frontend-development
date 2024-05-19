<script setup>
import { ref } from "vue";

let currentMenuItem = ref(0);

const menuItems = [
  { name: "Anasayfa" },
  { name: "Sınıflar" },
  { name: "Öğrenciler" },
  { name: "Eğitimler" },
  { name: "Yoklama" },
];
</script>
<template>
  <div>
    <div
      class="w-full bg-gray-200 p-3 flex items-center justify-between shadow"
    >
      <h1 class="text-2xl font-semibold">Kurs Yönetim Portali</h1>
      <button class="bg-blue-800 px-6 py-3 rounded text-white">
        Çıkış Yap
      </button>
    </div>
    <div class="flex w-full p-5 gap-5 justify-center items-start">
      <div class="bg-gray-200 w-1/6 p-3 rounded">
        <ul class="flex flex-col gap-3">
          <li
            :class="`${
              currentMenuItem == index ? 'bg-gray-800' : 'bg-gray-600'
            } text-white rounded p-3 cursor-pointer`"
            v-for="(menuItem, index) in menuItems"
            :key="index"
            @click="currentMenuItem = index"
          >
            {{ menuItem.name }}
          </li>
        </ul>
      </div>
      <div class="bg-gray-200 w-5/6 p-3 rounded min-h-[750px]">
        <div>
          <h2>Content Area</h2>
        </div>
      </div>
    </div>
  </div>
</template>
