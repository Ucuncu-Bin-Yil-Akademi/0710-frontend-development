"use client";
import { useState, useMemo } from "react";

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "William",
  },
];

export default function ExampleUseMemo1() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(text);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      console.log("Filter is running!");
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div className="p-5 flex flex-col items-center gap-5">
      <h1 className="text-xl font-bold text-gray-600">useMemo Example (1)</h1>

      <div>
        <span className="font-bold">Input Değeri: </span>
        {text}
      </div>

      <div>
        <span className="font-bold">Search Değeri: </span>
        {search}
      </div>

      <input
        className="bg-gray-200 border-2 border-gray-400 p-2 rounded-md"
        type="text"
        value={text}
        onChange={handleText}
      />

      <button
        className="bg-blue-500 text-white px-3 py-1 rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>

      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-600">Users</h2>
        <List list={filteredUsers} />
      </div>
    </div>
  );
}

export function List({ list }) {
  console.log("List component is rendered!");
  return (
    <ul>
      {list?.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}
