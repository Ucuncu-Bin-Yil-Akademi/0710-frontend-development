<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">Yöneticiler ({{ admins?.length || 0 }})</h1>
      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Yönetici Ekle"
            variant="flat"
          ></v-btn>
        </template>

        <template v-slot:default="{ isCreateAdminModalActive }">
          <v-card title="Yönetici Ekle">
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
              <v-text-field
                type="password"
                variant="solo"
                label="Şifre"
                v-model="password"
              ></v-text-field>
              <v-select
                :items="roles"
                label="Rol"
                v-model="selectedRole"
                item-title="text"
                item-value="value"
              >
              </v-select>

              <v-btn
                color="primary"
                class="w-full"
                size="large"
                @click="handleCreateAdmin"
              >
                Yönetici Ekle
              </v-btn>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </div>

    <div class="my-5 grid grid-cols-3 gap-10 mt-5">
      <div
        class="flex flex-col p-5 rounded border bg-gray-100"
        v-for="(admin, index) in admins"
      >
        <span>{{ admin.name }} {{ admin.lastName }}</span>
        <span
          ><b>{{
            admin.role === "instructor"
              ? "Eğitmen"
              : admin.role === "editor"
              ? "Editör"
              : "Yönetici"
          }}</b></span
        >
        <span><b>Email:</b> {{ admin.mail }}</span>
        <div class="flex gap-3 mt-3">
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                color="surface-variant"
                text="Yöneticiyi Sil"
                variant="flat"
                @click="selectedAdmin = admin._id"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Yöneticiyi silmek istediğinizden emin misiniz?">
                <template v-slot:actions>
                  <v-spacer></v-spacer>

                  <v-btn @click="dialog = false"> Vazgeç </v-btn>

                  <v-btn @click="handleDeleteAdmin"> Evet, sil </v-btn>
                </template>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>
    </div>
    <v-snackbar v-model="snackbar" multi-line location="top">
      {{ snackBarText }}

      <template v-slot:actions>
        <v-btn color="red" variant="text" @click="snackbar = false">
          Kapat
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const admins = ref([]);
const selectedAdmin = ref(null);
const isCreateAdminModalActive = ref(false);

const name = ref("");
const lastName = ref("");
const mail = ref("");
const phone = ref("");
const password = ref("");
const selectedRole = ref(null);
const snackbar = ref(false);
const snackBarText = ref("");

const roles = ref([
  { text: "Yönetici", value: "manager" },
  { text: "Editör", value: "editor" },
  { text: "Eğitmen", value: "instructor" },
]);

const getAllAdmins = async () => {
  try {
    const response = await axios.get("http://localhost:3000/admins");
    if (response.status === 200) {
      admins.value = response.data.admins;
    }
  } catch (err) {
    snackBarText.value = "Yöneticiler getirilirken bir hata oluştu.";
    snackbar.value = true;
  }
};

onMounted(async () => {
  await getAllAdmins();
});

const handleDeleteAdmin = async () => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/admins/${selectedAdmin.value}/delete`
    );
    if (response.status === 200) {
      await getAllAdmins();
    }
  } catch (err) {
    snackBarText.value = "Yönetici silinirken bir hata oluştu.";
    snackbar.value = true;
  }
};

const handleCreateAdmin = async () => {
  try {
    const response = await axios.post("http://localhost:3000/admins/create", {
      name: name.value,
      lastName: lastName.value,
      mail: mail.value,
      phoneNumber: phone.value,
      password: password.value,
      role: selectedRole.value,
    });
    if (response.status === 201) {
      await getAllAdmins();
      isCreateAdminModalActive.value = false;
    }
  } catch (err) {
    snackBarText.value = "Yönetici eklenirken bir hata oluştu.";
    snackbar.value = true;
  }
};
</script>
