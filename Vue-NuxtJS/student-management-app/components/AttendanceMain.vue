<template>
  <div>
    <h2 class="my-5 text-2xl">Yoklama İşlemleri</h2>

    <div>
      <div class="flex items-center gap-3">
        <v-select
          placeholder="Kurs Seçiniz"
          v-model="selectedCourse"
          label="Kurs Seçiniz"
          :items="courses"
          item-title="courseName"
          item-value="_id"
          variant="solo"
        ></v-select>

        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-text-field
              variant="solo"
              v-model="selectedDate"
              placeholder="Tarih Seçiniz"
              readonly
              v-bind="activatorProps"
            ></v-text-field>
          </template>

          <template v-slot:default="{ isActive }">
            <v-date-picker v-model="selectedDate"></v-date-picker>
          </template>
        </v-dialog>
      </div>
      <v-btn
        color="primary"
        class="w-full"
        size="large"
        @click="handleGetAttendance"
      >
        Yoklamayı Getir
      </v-btn>

      <div class="my-10 w-full" v-if="allStudentsOfCourse?.length > 0">
        <table
          class="min-w-full text-left text-sm font-light text-surface dark:text-white"
        >
          <thead
            class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark"
          >
            <tr class="w-full">
              <th scope="col" class="px-6 py-4">Yoklama Durumu</th>
              <th scope="col" class="px-6 py-4">Öğrenci Adı</th>
              <th scope="col" class="px-6 py-4">Öğrenci Soyadı</th>
              <th scope="col" class="px-6 py-4">Öğrenci Numarası</th>
              <th scope="col" class="px-6 py-4">Öğrenci Maili</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="student in allStudentsOfCourse"
              :key="student._id"
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10 text-gray-700"
            >
              <td class="whitespace-nowrap px-6 py-4 font-medium">
                <input
                  type="checkbox"
                  :checked="currentAttendanceStudents?.includes(student._id)"
                  @change="
                    currentAttendanceStudents.includes(student._id)
                      ? (currentAttendanceStudents =
                          currentAttendanceStudents.filter(
                            (id) => id !== student._id
                          ))
                      : currentAttendanceStudents.push(student._id)
                  "
                />
                <span class="ml-2"> Mevcut </span>
              </td>
              <td class="whitespace-nowrap px-6 py-4">{{ student.name }}</td>
              <td class="whitespace-nowrap px-6 py-4">
                {{ student.lastName }}
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                {{ student.phoneNumber }}
              </td>
              <td class="whitespace-nowrap px-6 py-4">{{ student.mail }}</td>
            </tr>
          </tbody>
        </table>

        <v-btn class="w-full mt-5" @click="handleUpdateAttendance"
          >Yoklamayı Kaydet</v-btn
        >
      </div>
    </div>
    <v-snackbar v-model="snackbar" multi-line location="top">
      {{ text }}

      <template v-slot:actions>
        <v-btn color="red" variant="text" @click="snackbar = false">
          Kapat
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const isActive = ref(false);
const selectedDate = ref(null);
const selectedCourse = ref(null);
const snackbar = ref(false);
const text = ref("");
const allStudentsOfCourse = ref([]);

const attendanceResponseData = ref([]);
const courses = ref([]);
let currentAttendanceStudents = reactive([]);

onMounted(async () => {
  const coursesResponse = await axios.get("http://localhost:3000/classes");
  if (coursesResponse.status === 200) {
    courses.value = coursesResponse.data;
  }
});

const handleGetClassStudents = async (id) => {
  const students = await axios.get(
    `http://localhost:3000/classes/${id}/students`
  );

  if (students.status === 200) {
    allStudentsOfCourse.value = students.data;
  }
};

const handleGetAttendance = async () => {
  if (!selectedDate.value || !selectedCourse.value) {
    snackbar.value = true;
    text.value = "Lütfen tarih ve kurs seçiniz.";
    return;
  }

  await handleGetClassStudents(selectedCourse.value);

  const attendanceData = await axios.post(
    "http://localhost:3000/attendance/get",
    {
      attendanceDate: selectedDate.value,
      classId: selectedCourse.value,
    }
  );

  if (attendanceData.status === 200) {
    attendanceResponseData.value = attendanceData.data;
    currentAttendanceStudents = attendanceData.data[0]?.students;
    snackbar.value = true;
    text.value = "Yoklama başarıyla getirildi.";
  } else {
    snackbar.value = true;
    text.value = "Yoklama getirilirken bir hata oldu.";
  }
};

const handleUpdateAttendance = async () => {
  const newAttendanceData = await axios.post(
    "http://localhost:3000/attendance/record",
    {
      attendanceDate: selectedDate.value,
      classId: selectedCourse.value,
      students: currentAttendanceStudents,
    }
  );

  if (newAttendanceData.status === 200) {
    snackbar.value = true;
    text.value = "Yoklama başarıyla kaydedildi.";
  } else {
    snackbar.value = true;
    text.value = "Yoklama kaydedilirken bir hata oldu.";
  }
};
</script>
