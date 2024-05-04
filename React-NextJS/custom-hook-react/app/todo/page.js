"use client";
import { useState } from "react";
import useTask from "../hooks/useTask";

export default function ToDoPage() {
  const [newTask, setNewTask] = useState("");
  const { todos, addTask, deleteTask } = useTask();

  return (
    <>
      <div className="bg-stone-200 flex flex-col justify-center items-center p-10 m-20 rounded-lg gap-10">
        <h1 className="text-3xl text-gray-600">To Do App.</h1>
        <input
          className="px-4 py-6 w-full rounded-md"
          type="text"
          placeholder="Lütfen bir görev giriniz"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="p-4 bg-stone-800 text-white w-full rounded-md fw-bold text-lg uppercase"
          onClick={() => addTask(newTask)}
        >
          Ekle
        </button>

        <div className="w-full flex flex-col gap-5">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex w-full justify-between items-center w-full p-4 bg-stone-100 rounded-md"
            >
              <span>{todo}</span>
              <button
                className="p-2 bg-red-400 text-white rounded-md"
                onClick={() => deleteTask(index)}
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
