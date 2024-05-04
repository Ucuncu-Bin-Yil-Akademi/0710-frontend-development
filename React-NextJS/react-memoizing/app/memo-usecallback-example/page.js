"use client";
import { useState, useCallback } from "react";
import MyButton from "./components/Button";

export default function ExampleOfMemoUseCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  console.log("Parent Component is rendered!");

  const handleClick = useCallback(() => {
    setCount((prevValue) => prevValue + 1);
  }, []);

  return (
    <div className="p-10 flex flex-col gap-5 items-center">
      <h2 className="text-2xl">useCallback & memo Hook Example</h2>
      <div className="flex gap-5 mt-10">
        <p className="bg-cyan-700 text-white p-5 font-bold text-xl rounded">
          {count}
        </p>
        <MyButton handleClick={handleClick} />
      </div>
      <div>
        <input
          className="border border-gray-400 rounded p-2 mt-5"
          type="text"
          placeholder="Please type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
