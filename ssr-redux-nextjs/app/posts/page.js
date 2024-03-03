"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddPost = () => {
    alert("içerik eklendi");
  };
  return (
    <>
      <div className={styles.containerElement}>
        <form className={styles.formWrapper}>
          <input
            className={styles.inputElement}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className={styles.textAreaElement}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button className={styles.buttonElement} onClick={handleAddPost}>
            Add New Post
          </button>
        </form>
      </div>
    </>
  );
}
