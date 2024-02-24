import moment from "moment";
import { useState } from "react";

export default function UserCard({ currentUser }) {
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    username: "",
  });

  return (
    <div
      className={
        "flex flex-col items-center gap-5 border border-2 p-3 rounded bg-gray-100" +
        (selectedUser.id === currentUser.id
          ? " border-orange-500"
          : " border-gray-300")
      }
    >
      <div className="flex gap-3 w-full">
        <img
          href={currentUser.avatar}
          className="h-[75px] w-[75px] rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-gray-500">{currentUser.username}</span>
          <span className="text-gray-600">
            {currentUser.firstname + " " + currentUser.lastname}
          </span>
          <span className="text-gray-500">
            {moment(currentUser.birtday).format("DD/MM/YYYY")}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button
          className="bg-orange-500 text-white px-2 py-1 rounded text-sm"
          onClick={() => {
            debugger;
            if (selectedUser.id === currentUser.id) {
              setSelectedUser({
                id: null,
                username: "",
              });
            } else {
              setSelectedUser({
                id: currentUser.id,
                username: currentUser.username,
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
}
