"use client";
import { useState, useMemo } from "react";
export default function ExampleOfUseMemo2() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const duplicate = () =>
    useMemo(() => {
      console.log("Duplicate function called");
      [...new Array(10000000)].forEach(() => {});
      return count * 2;
    }, [count]);

  /*   
const duplicate = () => {
    console.log("Duplicate function called");
    [...new Array(10000000)].forEach(() => {});
    return count * 2;
  };
*/
  const duplicateCount = duplicate();

  return (
    <div className="p-10 flex flex-col gap-5 items-center">
      <h2 className="text-2xl">useMemo Hook Example (2)</h2>
      <div className="flex gap-5 mt-10">
        <p className="bg-cyan-700 text-white p-5 font-bold text-xl rounded">
          {count}
        </p>
        <p className="bg-green-700 text-white p-5 font-bold text-xl rounded">
          {duplicateCount}
        </p>
        <button
          className="bg-orange-400 px-6 py-2 rounded text-gray-700"
          onClick={() => setCount((prevValue) => prevValue + 1)}
        >
          Increment
        </button>
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
