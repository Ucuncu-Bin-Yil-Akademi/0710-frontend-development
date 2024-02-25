"use client";
import { CounterData } from "@/app/context/counterContext";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function CounterPage() {
  const { counter, setCounter } = useContext(CounterData);
  return (
    <>
      <div className="w-full bg-gray-300 flex h-screen items-center justify-center gap-10">
        <IconButton
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}
        >
          <RemoveIcon />
        </IconButton>
        <span className="text-3xl font-bold">{counter}</span>
        <IconButton
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </>
  );
}
