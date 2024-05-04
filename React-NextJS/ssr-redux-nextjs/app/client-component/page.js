"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ContactUs() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://65bdedffdcfcce42a6f19a02.mockapi.io/get-users")
      .then((res) => {
        setUserData(res.data);
      });
  }, []);
  return (
    <>
      <h2>test</h2>
      <span>test</span>
      {userData.map((user, index) => {
        return (
          <div className="bg-red-200 rounded-lg p-2 m-3" key={index}>
            <h2 className="text-xl">
              {user.firstname} {user.lastname}
            </h2>
            <span className="text-gray-400 text-sm">@{user.username}</span>
          </div>
        );
      })}
    </>
  );
}
