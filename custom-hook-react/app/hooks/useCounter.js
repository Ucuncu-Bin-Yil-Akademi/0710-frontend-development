"use client";
import { useState } from "react";

const useCounter = (baslangicDegeri) => {
  if (typeof baslangicDegeri !== "number") return;

  const [count, setCount] = useState(baslangicDegeri);

  const arttir = () => {
    setCount((prev) => prev + 1);
  };

  const azalt = () => {
    setCount((prev) => prev - 1);
  };

  const sifirla = () => {
    setCount(baslangicDegeri);
  };

  return { arttir, azalt, sifirla, count };

  /*
  return {
    arttir: arttir,
    azalt: azalt,
    sifirla: sifirla,
    count: count
};
*/
};

export default useCounter;
