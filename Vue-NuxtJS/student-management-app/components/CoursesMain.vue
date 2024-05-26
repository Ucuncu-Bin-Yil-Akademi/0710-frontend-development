<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">Eğitimler (6)</h1>

      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Yeni Eğitim Ekle"
            variant="flat"
          ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Yeni Eğitim Oluştur">
            <v-card-text>
              <v-text-field variant="solo" label="Eğitim Adı"></v-text-field>
              <div class="flex gap-3">
                <v-dialog max-width="500">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-text-field
                      variant="solo"
                      v-model="newCourse.startDate"
                      placeholder="Tarih Seçiniz"
                      readonly
                      v-bind="activatorProps"
                    ></v-text-field>
                  </template>

                  <template v-slot:default="{ startDateDialog }">
                    <v-date-picker
                      v-model="newCourse.startDate"
                    ></v-date-picker>
                  </template>
                </v-dialog>

                <v-dialog max-width="500">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-text-field
                      variant="solo"
                      v-model="newCourse.endDate"
                      placeholder="Tarih Seçiniz"
                      readonly
                      v-bind="activatorProps"
                    ></v-text-field>
                  </template>

                  <template v-slot:default="{ endDateDialog }">
                    <v-date-picker v-model="newCourse.endDate"></v-date-picker>
                  </template>
                </v-dialog>
              </div>

              <v-text-field
                variant="solo"
                label="Eğitim Süresi (saat)"
                v-model="newCourse.totalHours"
              ></v-text-field>

              <div class="flex gap-3">
                <v-select
                  label="Öğrenci seçiniz"
                  v-model="newCourse.students"
                  :items="students"
                  item-title="name"
                  item-value="id"
                  multiple
                  persistent-hint
                ></v-select>

                <v-select
                  label="Eğitmen seçiniz"
                  v-model="newCourse.instructor"
                  :items="instructors"
                  :item-title="(item) => item.name + ' ' + item.lastName"
                  item-value="_id"
                >
                </v-select>
              </div>
              <v-btn
                color="primary"
                class="w-full"
                size="large"
                @click="handleCreateCourse"
              >
                Eğitimi Oluştur
              </v-btn>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </div>

    <div class="my-5 grid grid-cols-3 gap-10 mt-10">
      <div
        class="flex flex-col p-5 rounded border bg-gray-100"
        v-for="course in courses"
      >
        <span>{{ course.courseName }}</span>
        <span
          >Toplam
          <b>{{ course?.students?.length || 0 }} öğrenci</b> kayıtlı</span
        >
        <span
          ><b>Kurs Tarihi:</b>
          {{ moment(course.startDate).format("DD.MM.YYYY") }} -
          {{ moment(course.endDate).format("DD.MM.YYYY") }}
        </span>
        <span
          ><b>Eğitmen:</b> {{ course.instructor.name || "Eğitmen atanmadı" }}
          {{ course?.instructor?.lastName }}</span
        >
        <div class="flex gap-3 mt-3">
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                color="surface-variant"
                text="Eğitimi Düzenle"
                variant="flat"
                @click="selectedCourse = course"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Eğitimi Düzenle">
                <v-card-text>
                  <v-text-field
                    variant="solo"
                    label="Eğitim Adı"
                    v-model="selectedCourse.courseName"
                  ></v-text-field>
                  <div class="flex gap-3">
                    <v-dialog max-width="500">
                      <template v-slot:activator="{ props: activatorProps }">
                        <v-text-field
                          variant="solo"
                          placeholder="Tarih Seçiniz"
                          readonly
                          v-bind="activatorProps"
                          v-model="selectedCourse.startDate"
                        ></v-text-field>
                      </template>

                      <template v-slot:default="{ startDateDialog }">
                        <v-date-picker
                          v-model="selectedCourse.startDate"
                        ></v-date-picker>
                      </template>
                    </v-dialog>

                    <v-dialog max-width="500">
                      <template v-slot:activator="{ props: activatorProps }">
                        <v-text-field
                          variant="solo"
                          v-model="selectedCourse.endDate"
                          placeholder="Tarih Seçiniz"
                          readonly
                          v-bind="activatorProps"
                        ></v-text-field>
                      </template>

                      <template v-slot:default="{ endDateDialog }">
                        <v-date-picker
                          v-model="selectedCourse.endDate"
                        ></v-date-picker>
                      </template>
                    </v-dialog>
                  </div>

                  <v-text-field
                    variant="solo"
                    label="Eğitim Süresi (saat)"
                    v-model="selectedCourse.totalHours"
                  ></v-text-field>

                  <div class="flex gap-3">
                    <v-select
                      label="Öğrenci seçiniz"
                      v-model="selectedStudents"
                      :items="students"
                      :item-title="(item) => item.name + ' ' + item.lastName"
                      item-value="_id"
                      multiple
                      persistent-hint
                    ></v-select>

                    <v-select
                      label="Eğitmen seçiniz"
                      v-model="selectedInstructor"
                      :items="instructors"
                      :item-title="(item) => item.name + ' ' + item.lastName"
                      item-value="_id"
                    >
                    </v-select>
                  </div>
                  <v-btn
                    color="primary"
                    class="w-full"
                    size="large"
                    @click="handleUpdateCourse"
                  >
                    Eğitimi Düzenle
                  </v-btn>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>

          <v-btn color="error" text>Eğitimi Sil</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import moment from "moment";

const courses = ref([]);
const instructors = ref([]);
const students = ref([]);

const startDate = ref(null);
const endDate = ref(null);
const selectedStudents = ref([]);
const selectedInstructor = ref(null);

const selectedCourse = ref(null);

const newCourse = ref({
  courseName: "",
  startDate: "",
  endDate: "",
  totalHours: "",
  students: [],
  instructor: "",
});

const handleGetCourses = async () => {
  try {
    const coursesResponse = await axios.get("http://localhost:3000/classes");
    if (coursesResponse.status === 200) {
      courses.value = coursesResponse.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const handleGetStudents = async () => {
  try {
    const studentsResponse = await axios.get("http://localhost:3000/students");
    if (studentsResponse.status === 200) {
      students.value = studentsResponse.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const handleGetInstructors = async () => {
  try {
    const instructorResponse = await axios.get(
      "http://localhost:3000/instructors"
    );
    if (instructorResponse.status === 200) {
      instructors.value = instructorResponse.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const handleUpdateCourse = async () => {
  try {
    const response = await axios.put(
      `http://localhost:3000/classes/${selectedCourse.value._id}/update`,
      {
        courseName: selectedCourse.value.courseName,
        startDate: selectedCourse.value.startDate,
        endDate: selectedCourse.value.endDate,
        totalHours: selectedCourse.value.totalHours,
        students: selectedStudents.value,
        instructor: selectedInstructor.value,
      }
    );

    if (response.status === 200) {
      await handleGetCourses();
    }
  } catch (error) {
    console.log(error);
  }
};

const handleCreateCourse = async () => {
  try {
    const response = await axios.post(`http://localhost:3000/classes/create`, {
      ...newCourse.value,
    });

    if (response.status === 200) {
      await handleGetCourses();
    }
  } catch (error) {
    console.log(error);
  }
};
onMounted(async () => {
  await handleGetCourses();
  await handleGetInstructors();
  await handleGetStudents();
});
</script>
