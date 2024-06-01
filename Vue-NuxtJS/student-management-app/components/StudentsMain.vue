<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">Öğrenciler ({{ students?.length || 0 }})</h1>

      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Öğrenci Ekle"
            variant="flat"
          ></v-btn>
        </template>

        <template v-slot:default="{ isCreateAdminModalActive }">
          <v-card title="Öğrenci Ekle">
            <v-card-text>
              <div class="flex gap-3">
                <v-text-field
                  variant="solo"
                  label="Ad"
                  v-model="name"
                ></v-text-field>
                <v-text-field
                  variant="solo"
                  label="Soyad"
                  v-model="lastName"
                ></v-text-field>
              </div>
              <div class="flex gap-3">
                <v-text-field
                  variant="solo"
                  label="Mail"
                  v-model="mail"
                ></v-text-field>
                <v-text-field
                  variant="solo"
                  label="Telefon Numarası"
                  v-model="phone"
                ></v-text-field>
              </div>
              <v-select
                :items="courses"
                label="Eğitim Seçiniz"
                v-model="selectedCourse"
                item-title="courseName"
                item-value="_id"
              >
              </v-select>
              <v-btn
                color="primary"
                class="w-full"
                size="large"
                @click="handleCreateStudent"
              >
                Öğrenci Ekle
              </v-btn>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </div>

    <div class="my-5 grid grid-cols-3 gap-10 mt-5">
      <div
        class="flex flex-col p-5 rounded border bg-gray-100"
        v-for="(student, index) in students"
      >
        <span>{{ student.name }} {{ student.lastName }}</span>
        <span
          ><b>
            {{
              courses.find((course) => course._id === student.courses[0])
                .courseName
            }}
          </b></span
        >
        <span
          ><b>Kurs Tarihi:</b>
          {{
            formatDate(
              courses.find((course) => course._id === student.courses[0])
                .startDate
            )
          }}
          -
          {{
            formatDate(
              courses.find((course) => course._id === student.courses[0])
                .endDate
            )
          }}</span
        >
        <span><b>Email:</b> {{ student.mail }}</span>
        <div class="flex gap-3 mt-3">
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                size="small"
                color="surface-variant"
                text="Öğrenciyi Düzenle"
                variant="flat"
                @click="selectedStudent = student"
              ></v-btn>
            </template>

            <template v-slot:default="{ isCreateAdminModalActive }">
              <v-card title="Öğrenci Düzenle">
                <v-card-text>
                  <div class="flex gap-3">
                    <v-text-field
                      variant="solo"
                      label="Ad"
                      v-model="selectedStudent.name"
                    ></v-text-field>
                    <v-text-field
                      variant="solo"
                      label="Soyad"
                      v-model="selectedStudent.lastName"
                    ></v-text-field>
                  </div>
                  <div class="flex gap-3">
                    <v-text-field
                      variant="solo"
                      label="Mail"
                      v-model="selectedStudent.mail"
                    ></v-text-field>
                    <v-text-field
                      variant="solo"
                      label="Telefon Numarası"
                      v-model="selectedStudent.phoneNumber"
                    ></v-text-field>
                  </div>
                  <v-select
                    :items="courses"
                    label="Eğitim Seçiniz"
                    v-model="selectedStudent.courses"
                    item-title="courseName"
                    item-value="_id"
                  >
                  </v-select>
                  <v-btn
                    color="primary"
                    class="w-full"
                    size="large"
                    @click="handleEditStudent"
                  >
                    Öğrenciyi Düzenle
                  </v-btn>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>

          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                size="small"
                color="surface-variant"
                text="Öğrenciyi Sil"
                variant="flat"
                @click="selectedStudent = student"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActiveDeleteModal }">
              <v-card title="Öğrenciyi silmek istediğinizden emin misiniz?">
                <template v-slot:actions>
                  <v-spacer></v-spacer>

                  <v-btn @click="isActiveDeleteModal = false"> Vazgeç </v-btn>

                  <v-btn @click="deleteStudent"> Evet, sil </v-btn>
                </template>
              </v-card>
            </template>
          </v-dialog>
        </div>
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
import moment from "moment";

const snackbar = ref(false);
const text = ref("");

const name = ref("");
const lastName = ref("");
const mail = ref("");
const phone = ref("");
const selectedCourse = ref(null);
const selectedStudent = ref(null);

const students = ref([]);
const courses = ref([]);

const handleGetStudents = async () => {
  const studentsResponse = await axios.get("http://localhost:3000/students");
  if (studentsResponse.status === 200) {
    console.log(studentsResponse.data);
    students.value = studentsResponse.data;
  }
};

onMounted(async () => {
  try {
    await handleGetStudents();
    const coursesResponse = await axios.get("http://localhost:3000/classes");
    if (coursesResponse.status === 200) {
      courses.value = coursesResponse.data;
    }
  } catch (error) {
    snackbar.value = true;
    text.value = "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
  }
});

const handleCreateStudent = async () => {
  try {
    const response = await axios.post("http://localhost:3000/students/create", {
      name: name.value,
      lastName: lastName.value,
      mail: mail.value,
      phoneNumber: phone.value,
      courses: [selectedCourse.value],
    });
    if (response.status === 201) {
      snackbar.value = true;
      text.value = "Öğrenci başarıyla eklendi.";
      await handleGetStudents();
    }
  } catch (error) {
    snackbar.value = true;
    text.value = "Öğrenci eklenirken bir hata oluştu.";
  }
};

const deleteStudent = async () => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/students/${selectedStudent.value._id}/delete`
    );
    if (response.status === 204) {
      snackbar.value = true;
      text.value = "Öğrenci başarıyla silindi.";
      await handleGetStudents();
    }
  } catch (error) {
    snackbar.value = true;
    text.value = "Öğrenci silinirken bir hata oluştu.";
  }
};

const handleEditStudent = async () => {
  try {
    const { name, lastName, mail, phoneNumber, courses } =
      selectedStudent.value;
    const response = await axios.put(
      `http://localhost:3000/students/${selectedStudent.value._id}/update`,
      {
        name,
        lastName,
        mail,
        phoneNumber,
        courses,
      }
    );
    if (response.status === 200) {
      snackbar.value = true;
      text.value = "Öğrenci başarıyla güncellendi.";
      await handleGetStudents();
    }
  } catch (error) {
    snackbar.value = true;
    text.value = "Öğrenci güncellenirken bir hata oluştu.";
  }
};

const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};
</script>
