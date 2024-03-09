"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "@/app/redux/slices/postSlice";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      addPost({
        id: Date.now(),
        title,
        description,
      })
    );

    setTitle("");
    setDescription("");
  };

  const handleDeletePost = (id) => {
    debugger;
    if (!id) return;
    dispatch(deletePost({ id }));
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

        <h1 className="my-5 text-xl font-bold">Posts ({posts?.length || 0})</h1>
        {posts ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col border-2 border-gray-400 my-5 p-3 rounded"
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-400">{post.description}</p>
              <button
                className="bg-red-400 px-2 py-1 rounded text-white mt-2"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </>
  );
}
