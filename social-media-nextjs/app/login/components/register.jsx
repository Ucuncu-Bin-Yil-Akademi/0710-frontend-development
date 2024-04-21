"use client";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default function RegisterForm({ setFormType }) {
  const [registerFormData, setRegisterFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    bio: "",
  });

  const handleChangeValue = (targetEvent) => {
    setRegisterFormData({
      ...registerFormData,
      [targetEvent.target.name]: targetEvent.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await axios
        .post("http://localhost:3000/auth/register", {
          name: registerFormData.firstname,
          lastname: registerFormData.lastname,
          username: registerFormData.username,
          email: registerFormData.email,
          password: registerFormData.password,
          bio: registerFormData.bio,
        })
        .then((response) => {
          const { token } = response.data;
          const { name, lastname, username, _id } = response.data.user;
          Cookies.set("userToken", token);

          const loggedUserInfo = {
            name,
            lastname,
            username,
            _id,
          };

          localStorage.setItem(
            "loggedUserInfo",
            JSON.stringify(loggedUserInfo)
          );

          window.location.href = "/";
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.error,
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 my-10">
      <div className="grid grid-cols-2 gap-3">
        <input
          className="bg-gray-100 border p-3 rounded"
          type="text"
          name="firstname"
          placeholder="Ad"
          value={registerFormData.firstname}
          onChange={handleChangeValue}
        />

        <input
          className="bg-gray-100 border p-3 rounded"
          type="text"
          name="lastname"
          placeholder=" Soyad"
          value={registerFormData.lastname}
          onChange={handleChangeValue}
        />

        <input
          className="bg-gray-100 border p-3 rounded"
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={registerFormData.username}
          onChange={handleChangeValue}
        />
        <input
          className="bg-gray-100 border p-3 rounded"
          type="text"
          name="email"
          placeholder="E-mail adresi"
          value={registerFormData.email}
          onChange={handleChangeValue}
        />
      </div>

      <input
        className="bg-gray-100 border p-3 rounded"
        type="password"
        name="password"
        placeholder="Şifre"
        value={registerFormData.password}
        onChange={handleChangeValue}
      />

      <textarea
        className="bg-gray-100 border p-3 rounded resize-none"
        type="text"
        name="bio"
        placeholder="Biyografi"
        value={registerFormData.bio}
        onChange={handleChangeValue}
      />

      <button
        className="bg-blue-400 py-2 text-white font-semibold rounded"
        onClick={handleRegister}
      >
        Kayıt Ol
      </button>

      <div className="flex justify-end">
        <span
          className="text-gray-600 cursor-pointer"
          onClick={() => setFormType("login")}
        >
          Zaten bir hesabınız var mı?
        </span>
      </div>
    </div>
  );
}
