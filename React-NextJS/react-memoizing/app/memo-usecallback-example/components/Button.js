"use client";
import { memo } from "react";
function MyButton({ handleClick }) {
  console.log("Button is rendered!");
  return (
    <button
      className="bg-orange-400 px-6 py-2 rounded text-gray-700"
      onClick={handleClick}
    >
      Increment
    </button>
  );
}

export default memo(MyButton);
