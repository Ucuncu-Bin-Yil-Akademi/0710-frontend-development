<script setup>
import { ref, computed } from "vue";
let firstName = ref("");
let middleName = ref("");
let lastName = ref("");
let isAgreed = ref(false);
let fullName = computed(() => {
  return `${firstName.value} ${middleName.value} ${lastName.value}`;
});
let gender = ref("male");
</script>
<template>
  <div class="formWrapper">
    <h1>Merhaba, {{ fullName }}</h1>
    <input
      type="text"
      :value="firstName"
      @input="firstName = $event.target.value"
      placeholder="Lütfen adınızı giriniz"
    />
    <input
      type="text"
      v-model="middleName"
      placeholder="Lütfen adınızı giriniz"
    />
    <input
      type="text"
      :value="lastName"
      @input="(event) => (lastName = event.target.value)"
      placeholder="Lütfen adınızı giriniz"
    />
    <br />
    <input type="checkbox" v-model="isAgreed" /><label
      >Şartları kabul ediyorum.</label
    >
    <h1 v-if="isAgreed">Şartları kabul ettiniz.</h1>
    <h1 v-else>Lütfen şartları kabul ediniz.</h1>
    <br />
    <h1>Cinsiyetiniz: {{ gender === "male" ? "Erkek" : "Kadın" }}</h1>
    <input
      type="radio"
      id="gender"
      name="gender"
      value="male"
      v-model="gender"
    /><label>Erkek</label>
    <br />
    <input
      type="radio"
      id="gender"
      name="gender"
      value="female"
      v-model="gender"
    /><label>Kadın</label>
  </div>
</template>

<style>
.formWrapper {
  padding: 20px;
}

input[type="text"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
