<template>
  <div class="w-screen h-screen bg-gray-100">
    <div class="flex justify-center items-center h-full">
      <div class="bg-gray-200 p-5 rounded-lg w-1/2 shadow-lg">
        <div class="flex flex-col items-center my-5">
          <img
            src="https://www.ucuncubinyil.com/wp-content/uploads/2023/10/ucuncubinyil-logo.png"
          />

          <h1 class="text-xl font-semibold">Giriş Yap</h1>
        </div>
        <div class="flex flex-col my-10 gap-5">
          <input
            type="text"
            placeholder="E-mail"
            v-model="email"
            class="border rounded p-3"
          />
          <input
            type="password"
            placeholder="Şifre"
            v-model="password"
            class="border rounded p-3"
          />
          <button
            class="bg-gray-800 text-white p-3 rounded mt-5"
            @click="loginHandle"
          >
            Giriş Yap
          </button>
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
import axios from "axios";
import { ref } from "vue";

const snackbar = ref(false);
const text = ref("");

const email = ref("");
const password = ref("");

const loginHandle = async () => {
  try {
    const response = await axios.post("http://localhost:3000/admins/login", {
      mail: email.value,
      password: password.value,
    });

    if (response.status !== 200) {
      text.value = "Bilgilerinizi kontrol ediniz.";
      snackbar.value = true;
    }
  } catch (err) {
    text.value = "Bilgilerinizi kontrol ediniz.";
    snackbar.value = true;
  }
};
</script>
