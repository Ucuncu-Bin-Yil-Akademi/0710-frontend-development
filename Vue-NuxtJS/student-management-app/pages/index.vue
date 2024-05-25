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
          <input type="text" placeholder="E-mail" class="border rounded p-3" />
          <input
            type="password"
            placeholder="Şifre"
            class="border rounded p-3"
          />
          <button class="bg-gray-800 text-white p-3 rounded mt-5">
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
