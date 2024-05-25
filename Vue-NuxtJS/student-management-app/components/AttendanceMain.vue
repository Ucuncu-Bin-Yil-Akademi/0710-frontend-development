<template>
  <div>
    <h2 class="my-5 text-2xl">Yoklama İşlemleri</h2>

    <div>
      <div class="flex items-center gap-3">
        <v-select
          placeholder="Kurs Seçiniz"
          label="Kurs Seçiniz"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
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
      <v-btn color="primary" class="w-full" size="large">
        Yoklamayı Getir
      </v-btn>

      <div class="my-10 w-full">
        <ag-grid-vue
          :rowData="rowData"
          :columnDefs="colDefs"
          style="width: 100%; height: 500px"
          autoSizeStrategy="fitCellContents"
          colSize="auto"
          class="ag-theme-quartz"
        >
        </ag-grid-vue>
      </div>
    </div>
  </div>
</template>
<script setup>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridVue } from "ag-grid-vue3";

import { ref } from "vue";

const isActive = ref(false);
const selectedDate = ref(null);

const rowData = ref([
  { name: "John", lastName: "Doe", mail: "john_doe@gmail.com", isExists: true },
  {
    name: "Jane",
    lastName: "Doe",
    mail: "jane_doe@gmail.com",
    isExists: false,
  },
  {
    name: "Alex",
    lastName: "Doe",
    mail: "alex_doe@gmail.com",
    isExists: false,
  },
]);

const colDefs = ref([
  { field: "isExists", headerName: "Mevcut" },
  { field: "name", headerName: "Ad" },
  { field: "lastName", headerName: "Soyad" },
  { field: "mail", headerName: "E-Posta" },
]);
</script>
