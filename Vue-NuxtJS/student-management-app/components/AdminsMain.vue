<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">Yöneticiler (6)</h1>
      <button class="bg-blue-800 text-white px-3 py-1 rounded">
        Yönetici Ekle
      </button>
    </div>

    <div class="my-5 grid grid-cols-3 gap-10 mt-5">
      <div class="flex flex-col p-5 rounded border bg-gray-100">
        <span>John Doe</span>
        <span><b>Eğitmen</b></span>
        <span><b>Email:</b> john_doe@gmail.com</span>
        <div class="flex gap-3">
          <button class="bg-blue-800 text-white px-3 py-1 rounded mt-3">
            Düzenle
          </button>
          <button class="bg-red-800 text-white px-3 py-1 rounded mt-3">
            Sil
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
