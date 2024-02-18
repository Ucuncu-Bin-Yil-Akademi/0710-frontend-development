"use client";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    username: "",
  });

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
        Kullanıcı Listesi ({userData.length})
      </h1>
      <span>Seçilen Kullanıcı: {selectedUser.username}</span>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {userData.map((user) => {
          return (
            <div
              className={
                "flex flex-col items-center gap-5 border border-2 p-3 rounded bg-gray-100" +
                (selectedUser.id === user.id
                  ? " border-orange-500"
                  : " border-gray-300")
              }
            >
              <div className="flex gap-3 w-full">
                <img
                  href={user.avatar}
                  className="h-[75px] w-[75px] rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-gray-500">{user.username}</span>
                  <span className="text-gray-600">
                    {user.firstname + " " + user.lastname}
                  </span>
                  <span className="text-gray-500">
                    {moment(user.birtday).format("DD/MM/YYYY")}
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <button
                  className="bg-orange-500 text-white px-2 py-1 rounded text-sm"
                  onClick={() => {
                    debugger;
                    if (selectedUser.id === user.id) {
                      setSelectedUser({
                        id: null,
                        username: "",
                      });
                    } else {
                      setSelectedUser({
                        id: user.id,
                        username: user.username,
                      });
                    }
                  }}
                >
                  Kullanıcıyı Seç
                </button>

                <button className="bg-gray-500 text-white px-2 py-1 rounded text-sm">
                  Kullanıcıyı Güncelle
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
