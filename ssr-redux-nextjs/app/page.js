"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const posts = useSelector((state) => state.posts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5">
      {posts?.map((post) => (
        <div
          key={post.id}
          className="flex flex-col items-center justify-center text-white bg-gray-800 p-8 rounded-lg shadow-lg w-96 h-96"
        >
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-lg">{post.description}</p>
        </div>
      ))}
    </main>
  );
}
