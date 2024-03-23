"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import LoginForm from "./components/login";
import RegisterForm from "./components/register";

export default function LoginPage() {
  const [formType, setFormType] = useState("register");
  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white flex p-5 border-4 rounded w-1/2">
          <div className="w-1/2 flex justify-center items-center gap-5 mb-5">
            <Image src={Logo} alt="Üçüncü Bin Yıl" width={180} height={180} />
            <span className="h-[30px] w-[1px] bg-gray-300"></span>
            <h2 className="text-center text-xl font-semibold text-gray-600">
              {formType === "login" ? "Giriş Yap" : "Kayıt Ol"}
            </h2>
          </div>
          <div className="w-1/2">
            {formType === "login" && <LoginForm setFormType={setFormType} />}
            {formType === "register" && (
              <RegisterForm setFormType={setFormType} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
