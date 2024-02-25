"use client"; // Client Side Rendering işlemi yap. (Server Side Rendering yapmaz.)
import axios from "axios";
import { CounterData } from "@/app/context/counterContext";
import { useEffect, useState, useContext } from "react";
import UserCard from "./components/userCard";
import SpanComponent from "../jsx-syntax/components/spanComponent";

export default function UsersPage() {
  const [userData, setUserData] = useState([]);
  const { counter, setCounter } = useContext(CounterData);

  useEffect(() => {
    axios
      .get("https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users")
      .then((response) => {
        setUserData(response.data);
      });
  }, []);

  return (
    <div className="mx-10">
      <h1 className="text-gray-500 text-xl my-10">
        Kullanıcı Listesi ({userData.length}) - Counter: {counter}
      </h1>

      {userData.length === 0 ? <h1>Kullanıcı bulunamadı!</h1> : <></>}
      {userData.length === 0 && <h1>Kullanıcı bulunamadı!</h1>}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {userData.map((user) => (
          <UserCard currentUser={user} />
        ))}
      </div>

      <SpanComponent spanText="Hello world!" users={userData} />
    </div>
  );
}
