"use client";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default function LoginForm({ setFormType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await axios
        .post("http://localhost:3000/auth/login", {
          email,
          password,
        })
        .then((response) => {
          const { name, lastname, username, token, _id } = response.data;
          /*
        const username = response.data.username;
        const name = response.data.name;
        const lastname = response.data.lastname;
        const token = response.data.token;
        const _id = response.data._id;
        */
          debugger;

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
        text: error.response.data.message,
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 my-10">
      <input
        className="bg-gray-100 border p-3 rounded"
        type="text"
        placeholder="E-mail adresi"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="bg-gray-100 border p-3 rounded"
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-400 py-2 text-white font-semibold rounded"
        onClick={handleLogin}
      >
        Giriş Yap
      </button>

      <div className="flex justify-end">
        <span
          className="text-gray-600 cursor-pointer"
          onClick={() => setFormType("register")}
        >
          Henüz bir hesabınız yok mu?
        </span>
      </div>
    </div>
  );
}
