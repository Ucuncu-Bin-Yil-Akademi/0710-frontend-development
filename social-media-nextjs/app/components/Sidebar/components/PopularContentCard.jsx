"use client";
import { useState, useEffect } from "react";
import { getPopularContents } from "@/app/services/publications";
import { dateFormatter } from "@/app/utils/dateFormatter";

const PopularContentCard = () => {
  const [popularContents, setPopularContents] = useState([]);

  const handleGetPopularContents = async () => {
    await getPopularContents(function (res) {
      if (res.status === 200) {
        setPopularContents(res.data.publications);
      }
    });
  };

  useEffect(() => {
    handleGetPopularContents();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      {popularContents?.map((post) => {
        return (
          <div className="bg-gray-50 border p-2 rounded" key={post._id}>
            <div className="flex gap-2 text-gray-400 text-sm pb-3">
              <span>@{`${post.user[0]?.username}`}</span>
              <span>•</span>
              <span>{dateFormatter(post.createdAt)}</span>
            </div>
            <p className="text-gray-500 text-sm">{post.content}</p>
            <p className="text-gray-500 text-sm mt-3">
              Toplam <b>{post.likes?.length || 0}</b> kişi tarafından beğenildi.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PopularContentCard;
