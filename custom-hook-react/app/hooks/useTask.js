"use client";
import { useState } from "react";
const useTask = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (newTask) => {
    setTodos([...todos, newTask]);
  };

  const deleteTask = (index) => {
    const newTodos = todos.map((currentTodo, currentIndex) => {
      if (currentIndex == index) return null;
      else return currentTodo;
    });

    setTodos(newTodos.filter((todo) => todo !== null));
  };

  return { todos, addTask, deleteTask };
};

export default useTask;
