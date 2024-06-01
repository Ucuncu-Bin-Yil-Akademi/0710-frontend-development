<template>
  <div class="p-5">
    <h2 class="my-5 cardTitle">İstatistikler</h2>
    <div class="grid grid-cols-3 gap-5 my-5">
      <div
        class="bg-red-700 text-white p-10 rounded flex flex-col items-center"
      >
        <span class="cardTitle">Toplam Sınıflar</span>
        <span class="cardSubtitle">{{ courses?.length || 0 }}</span>
      </div>
      <div
        class="bg-blue-900 text-white p-10 rounded flex flex-col items-center"
      >
        <span class="cardTitle">Toplam Eğitmenler</span>
        <span class="cardSubtitle">{{ instructors?.length || 0 }}</span>
      </div>
      <div
        class="bg-orange-700 text-white p-10 rounded flex flex-col items-center"
      >
        <span class="cardTitle">Toplam Öğrenci</span>
        <span class="cardSubtitle">{{ students?.length || 0 }}</span>
      </div>
    </div>

    <div class="flex flex-col my-5">
      <h2 class="cardTitle my-5">Son Açılan Sınıflar</h2>

      <div class="flex gap-5">
        <div
          class="flex flex-col p-5 border bg-gray-100 rounded"
          v-for="course in courses"
          :key="course._id"
        >
          <span class="text-xl">{{ course?.courseName }}</span>
          <span
            ><b>Oluşturulma:</b>
            {{ moment(course?.startDate).format("DD-MM-YYYY") }}</span
          >
          <span
            >Toplam
            <b>{{ course?.students?.length || 0 }} öğrenci</b> kayıtlı</span
          >
        </div>
      </div>
    </div>

    <div class="flex flex-col my-5">
      <h2 class="cardTitle my-5">Son Kayıt Olan Öğrenciler</h2>

      <div class="flex gap-5">
        <div
          class="flex flex-col p-5 border bg-gray-100 rounded"
          v-for="student in students"
          :key="student._id"
        >
          <span class="text-xl">{{ student.name }} {{ student.lastName }}</span>
          <span><b>Telefon Numarası:</b> {{ student?.phoneNumber }}</span>
          <span
            >Kayıtlı olduğu
            <b>{{ student?.courses?.length }} adet kurs mevcut</b></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import moment from "moment";

const students = ref([]);
const courses = ref([]);
const instructors = ref([]);

onMounted(async () => {
  try {
    const studentsResponse = await axios.get("http://localhost:3000/students");
    if (studentsResponse.status === 200) {
      students.value = studentsResponse.data;
    }
    const coursesResponse = await axios.get("http://localhost:3000/classes");
    if (coursesResponse.status === 200) {
      courses.value = coursesResponse.data;
    }
    const instructorsResponse = await axios.get(
      "http://localhost:3000/instructors"
    );
    if (instructorsResponse.status === 200) {
      instructors.value = instructorsResponse.data;
    }
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
.cardTitle {
  font-size: 1.6rem;
}

.cardSubtitle {
  font-size: 1.2rem;
}
</style>
