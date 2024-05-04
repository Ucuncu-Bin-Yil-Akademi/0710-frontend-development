"use client";
import { counterAtom } from "../atoms/counterAtom";
import { useAtom } from "jotai";
export default function CounterPage() {
  const [count, setCount] = useAtom(counterAtom);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white my-8">Counter</h1>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded text-xl font-bold"
          onClick={() => setCount((lastCounterValue) => lastCounterValue - 1)}
        >
          -
        </button>
        <span className="text-2xl font-bold text-gray-100">{count}</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded text-xl font-bold"
          onClick={() => setCount((lastCounterValue) => lastCounterValue + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
