<script setup>
import { ref, onMounted } from "vue";
import DashboardMain from "@/components/DashboardMain.vue";
import StudentsMain from "@/components/StudentsMain.vue";
import CoursesMain from "@/components/CoursesMain.vue";
import AttendanceMain from "@/components/AttendanceMain.vue";
import AdminsMain from "@/components/AdminsMain.vue";
import Cookies from "js-cookie";

let currentMenuItem = ref(0);

const menuItems = ref([
  {
    name: "Anasayfa",
    component: DashboardMain,
    allowedRoles: ["manager", "instructor", "editor"],
  },
  {
    name: "Eğitimler",
    component: CoursesMain,
    allowedRoles: ["manager", "editor"],
  },
  {
    name: "Öğrenciler",
    component: StudentsMain,
    allowedRoles: ["manager", "editor"],
  },
  {
    name: "Yoklama",
    component: AttendanceMain,
    allowedRoles: ["manager", "instructor", "editor"],
  },
  { name: "Yöneticiler", component: AdminsMain, allowedRoles: ["manager"] },
]);
</script>
<template>
  <div>
    <div
      class="w-full bg-gray-200 p-3 flex items-center justify-between shadow"
    >
      <h1 class="text-2xl font-semibold mx-3">Kurs Yönetim Portali</h1>
      <a href="/" class="bg-blue-800 px-6 py-3 rounded text-white">
        Çıkış Yap
      </a>
    </div>
    <div class="flex w-full p-5 gap-5 justify-center items-start">
      <div class="bg-gray-200 w-1/6 p-3 rounded">
        <ul class="flex flex-col gap-3">
          <li
            :class="`${
              currentMenuItem == menuItems.indexOf(menuItem)
                ? 'bg-gray-800'
                : 'bg-gray-600'
            } text-white rounded p-3 cursor-pointer`"
            v-for="(menuItem, index) in menuItems.filter((item) =>
              item.allowedRoles.includes(Cookies.get('role'))
            )"
            :key="index"
            @click="currentMenuItem = menuItems.indexOf(menuItem)"
          >
            {{ menuItem.name }}
          </li>
        </ul>
      </div>
      <div class="bg-gray-200 w-5/6 p-3 rounded min-h-[750px]">
        <div>
          <component :is="menuItems[currentMenuItem].component" />
        </div>
      </div>
    </div>
  </div>
</template>
