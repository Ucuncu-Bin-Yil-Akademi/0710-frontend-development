"use client";
import { createContext, useState } from "react";

export const CounterData = createContext();

export default function CounterContext({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterData.Provider value={{ counter, setCounter }}>
      {children}
    </CounterData.Provider>
  );
}
