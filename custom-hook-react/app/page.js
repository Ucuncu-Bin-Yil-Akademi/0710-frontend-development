"use client";
import useCounter from "./hooks/useCounter";

export default function Home() {
  const { arttir, azalt, sifirla, count } = useCounter(0);
  return (
    <>
      <div className="flex flex-col items-center gap-10 px-5 py-16 bg-gray-200 border m-10 rounded">
        <h1 className="text-3xl text-gray-600">Counter App.</h1>
        <div className="flex justify-center items-center gap-10">
          <button
            className="bg-green-200 p-5 rounded text-2xl fw-bold"
            onClick={arttir}
          >
            +
          </button>
          <span className="bg-gray-900 text-white text-2xl p-10 rounded">
            {count}
          </span>
          <button
            className="bg-red-200 p-5 rounded text-2xl fw-bold"
            onClick={azalt}
          >
            -
          </button>
        </div>

        <button
          className="bg-blue-200 px-5 py-2 rounded text-lg fw-bold"
          onClick={sifirla}
        >
          Sıfırla
        </button>
      </div>
    </>
  );
}
