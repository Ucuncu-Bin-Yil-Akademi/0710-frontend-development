"use client";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { dateFormatter } from "@/app/utils/dateFormatter";
import Image from "next/image";
import { likeContent, getAllContents } from "@/app/services/publications";
import { contentListDataAtom } from "@/app/atoms/contentListAtom";
import { useAtom } from "jotai";

export default function ContentCard({
  id,
  summary,
  imageUrl,
  firstname,
  lastname,
  createdOn,
  likes,
  youtubeVideoCode,
  username,
}) {
  const [contentListData, setContentListData] = useAtom(contentListDataAtom);

  const handleLike = async () => {
    await likeContent(function (res) {
      if (res.status === 200) {
        getAllContents(function (res) {
          if (res.status === 200) {
            setContentListData(res.data.publications);
          }
        });
      } else {
        Swal2.fire({
          icon: "error",
          title: "Hata",
          text: "İçerikler getirilirken bir hata oluştu.",
        });
      }
    }, id);
  };

  return (
    <>
      <div className="flex flex-col justify-between bg-gray-100 rounded border">
        <div className="flex items-center gap-3 bg-gray-200 p-5">
          <Avatar sx={{ bgcolor: red[500] }}>{firstname?.[0]}</Avatar>
          <div className="flex flex-col">
            <a href={username}>{`${firstname} ${lastname}`}</a>
            <span className="text-sm text-gray-400">
              {dateFormatter(createdOn)}
            </span>
          </div>
        </div>

        {youtubeVideoCode && (
          <div className="">
            <iframe
              height="300"
              src={`https://www.youtube.com/embed/${youtubeVideoCode}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-full rounded-b-md"
            ></iframe>
          </div>
        )}

        {imageUrl && !youtubeVideoCode && (
          <div className="h-full">
            <Image
              src={
                "https://wuubi-media.s3.eu-central-1.amazonaws.com/" + imageUrl
              }
              alt="content"
              width={500}
              height={500}
              className="min-h-[300px] object-cover rounded-b-md"
            />
          </div>
        )}

        <div className="p-5">
          <p>{summary}</p>
        </div>

        <div className="p-5 bg-gray-200">
          <span>{likes?.length || 0} beğeni</span>
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            {likes?.includes(
              JSON.parse(localStorage.getItem("loggedUserInfo"))?._id
            ) ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </>
  );
}
