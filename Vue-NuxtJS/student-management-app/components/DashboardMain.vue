<template>
  <div class="p-5">
    <h2 class="my-5 cardTitle">İstatistikler</h2>
    <div class="grid grid-cols-3 gap-5 my-5">
      <div
        class="bg-red-700 text-white p-10 rounded flex flex-col items-center"
      >
        <span class="cardTitle">Toplam Sınıflar</span>
        <span class="cardSubtitle">45</span>
      </div>
      <div
        class="bg-blue-900 text-white p-10 rounded flex flex-col items-center"
      >
        <span class="cardTitle">Toplam Eğitmenler</span>
        <span class="cardSubtitle">45</span>
      </div>
      <div
        class="bg-orange-700 text-white p-10 rounded flex flex-col items-center"
      >
        <span class="cardTitle">Toplam Öğrenci</span>
        <span class="cardSubtitle">380</span>
      </div>
    </div>

    <div class="flex flex-col my-5">
      <h2 class="cardTitle my-5">Son Açılan Sınıflar</h2>

      <div class="flex gap-5">
        <div class="flex flex-col p-5 border bg-gray-100 rounded">
          <span class="text-xl">Frontend Geliştirme Kursu</span>
          <span><b>Oluşturulma:</b> 25.05.2024</span>
          <span>Toplam <b>12 öğrenci</b> kayıtlı</span>
        </div>

        <div class="flex flex-col p-3 border bg-gray-100 rounded">
          <span class="text-xl">Frontend Geliştirme Kursu</span>
          <span>Oluşturulma: 25.05.2024</span>
          <span>Toplam <b>12 öğrenci</b> kayıtlı</span>
        </div>

        <div class="flex flex-col p-3 border bg-gray-100 rounded">
          <span class="text-xl">Frontend Geliştirme Kursu</span>
          <span>Oluşturulma: 25.05.2024</span>
          <span>Toplam <b>12 öğrenci</b> kayıtlı</span>
        </div>

        <div class="flex flex-col p-3 border bg-gray-100 rounded">
          <span class="text-xl">Frontend Geliştirme Kursu</span>
          <span>Oluşturulma: 25.05.2024</span>
          <span>Toplam <b>12 öğrenci</b> kayıtlı</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col my-5">
      <h2 class="cardTitle my-5">Son Kayıt Olan Öğrenciler</h2>

      <div class="flex gap-5">
        <div class="flex flex-col p-5 border bg-gray-100 rounded">
          <span class="text-xl">John Doe</span>
          <span><b>Kayıt Tarihi:</b> 25.05.2024</span>
          <span><b>Kurs:</b> Frontend Geliştirme Kursu</span>
        </div>

        <div class="flex flex-col p-5 border bg-gray-100 rounded">
          <span class="text-xl">John Doe</span>
          <span><b>Kayıt Tarihi:</b> 25.05.2024</span>
          <span><b>Kurs:</b> Frontend Geliştirme Kursu</span>
        </div>

        <div class="flex flex-col p-5 border bg-gray-100 rounded">
          <span class="text-xl">John Doe</span>
          <span><b>Kayıt Tarihi:</b> 25.05.2024</span>
          <span><b>Kurs:</b> Frontend Geliştirme Kursu</span>
        </div>

        <div class="flex flex-col p-5 border bg-gray-100 rounded">
          <span class="text-xl">John Doe</span>
          <span><b>Kayıt Tarihi:</b> 25.05.2024</span>
          <span><b>Kurs:</b> Frontend Geliştirme Kursu</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const statics = ref([
  {
    title: "Toplam Sınıflar",
    count: 45,
    color: "bg-red-700",
  },
  {
    title: "Toplam Eğitmenler",
    count: 45,
    color: "bg-blue-900",
  },
  {
    title: "Toplam Öğrenci",
    count: 380,
    color: "bg-orange-700",
  },
]);
</script>

<style scoped>
.cardTitle {
  font-size: 1.6rem;
}

.cardSubtitle {
  font-size: 1.2rem;
}
</style>
