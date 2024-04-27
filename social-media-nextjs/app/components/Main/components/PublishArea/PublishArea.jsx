"use client";
import { youtubeParser } from "@/app/utils/youtubeParser";
import Popover from "@mui/material/Popover";
import Swal2 from "sweetalert2";
import axios from "axios";
import Cookies from "js-cookie";
import { contentListDataAtom } from "@/app/atoms/contentListAtom";
import { useAtom } from "jotai";
import { getAllContents } from "@/app/services/publications";

import {
  TextField,
  YouTubeIcon,
  AddPhotoAlternateIcon,
  Button,
} from "../../components";

import { useState } from "react";

export default function PublishArea() {
  const [newContent, setNewContent] = useState("");
  const [youtubePopover, setYoutubePopever] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [youtubeVideoCode, setYoutubeVideoCode] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [, setContentListData] = useAtom(contentListDataAtom);

  const isYoutubePopoverOpen = Boolean(youtubePopover);
  const idYoutubePopover = isYoutubePopoverOpen ? "youtube-popover" : undefined;

  const publishPost = async () => {
    const userCookie = Cookies.get("userToken");
    if (!newContent || !userCookie) return;

    const requestFormData = new FormData();
    requestFormData.append("content", newContent);
    requestFormData.append("embedVideo", youtubeVideoCode);
    requestFormData.append("image", selectedImage);

    await axios
      .post("http://localhost:3000/publications/publish", requestFormData, {
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      })
      .then(async (response) => {
        if (response.status === 200) {
          Swal2.fire({
            icon: "success",
            title: "Başarılı",
            text: response.data.message,
          });

          setYoutubeUrl("");
          setYoutubeVideoCode("");
          setNewContent("");
          setSelectedImage(null);

          await getAllContents(function (res) {
            if (res.status === 200) {
              setContentListData(res.data.publications);
            } else {
              Swal2.fire({
                icon: "error",
                title: "Hata",
                text: "İçerikler getirilirken bir hata oluştu.",
              });
            }
          });
        } else {
          Swal2.fire({
            icon: "error",
            title: "Hata",
            text: "Bir hata oluştu. Lütfen tekrar deneyin",
          });
        }
      })
      .catch((error) => {
        Swal2.fire({
          icon: "error",
          title: "Hata",
          text: "Bir hata oluştu. Lütfen tekrar deneyin",
        });
      });
  };

  return (
    <div className="bg-gray-50 border p-5 rounded">
      <div className="w-full p-3 rounded">
        <h2 className="font-semibold text-xl text-gray-600 mb-5">
          Yeni bir içerik paylaş
        </h2>
        <TextField
          className="w-full"
          id="outlined-multiline-static"
          multiline
          rows={2}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Yeni bir şeyler deneyin..."
        />
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center" id="iconsElement">
            <YouTubeIcon
              aria-describedby={idYoutubePopover}
              className="cursor-pointer"
              variant="contained"
              onClick={(event) => setYoutubePopever(event.currentTarget)}
            />

            <Popover
              id={idYoutubePopover}
              open={isYoutubePopoverOpen}
              anchorEl={youtubePopover}
              onClose={() => setYoutubePopever(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="bg-blue-500 p-5 flex items-center">
                <h4 className="font-bolder text-lg mb-2 text-gray-200">
                  YouTube Videosu Ekle
                </h4>
                <input
                  className="rounded px-3 py-2 outline-none"
                  type="text"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="Youtube linki yapıştırın"
                />
                <button
                  className="bg-gray-200 rounded px-3 py-2 ml-2"
                  onClick={() => {
                    if (!youtubeUrl?.includes("https://")) {
                      Swal2.fire({
                        icon: "error",
                        title: "Hata",
                        text: "Geçerli bir youtube linki giriniz",
                      });
                      return;
                    }
                    const code = youtubeParser(youtubeUrl);
                    setYoutubeVideoCode(code);
                    setYoutubePopever(null);
                  }}
                >
                  Ekle
                </button>
              </div>
            </Popover>

            <label htmlFor="image-input">
              <AddPhotoAlternateIcon className="cursor-pointer" />
            </label>
            <input
              type="file"
              id="image-input"
              accept="image/*"
              style={{
                display: "none",
              }}
              onChange={(event) => {
                const selectedImage = event.target.files[0];
                if (
                  selectedImage.type !== "image/jpeg" &&
                  selectedImage.type !== "image/png" &&
                  selectedImage.type !== "image/jpg"
                ) {
                  Swal2.fire({
                    icon: "error",
                    title: "Hata",
                    text: "Lütfen geçerli bir resim dosyası seçiniz",
                  });
                  return;
                }

                setSelectedImage(selectedImage);
              }}
            />

            {youtubeVideoCode && (
              <div className="flex items-center">
                <a
                  className="bg-green-300 p-1 rounded text-gray-800"
                  href={youtubeUrl}
                  target="_blank"
                >
                  YouTube Videosu Eklendi
                </a>
                <span
                  className="bg-red-500 p-1 text-white rounded ml-1 text-sm font-bold cursor-pointer"
                  onClick={() => {
                    setYoutubeUrl("");
                    setYoutubeVideoCode("");
                  }}
                >
                  Kaldır
                </span>
              </div>
            )}

            {selectedImage && (
              <div className="flex items-center ml-4">
                <span className="bg-green-300 p-1 rounded text-gray-800">
                  {selectedImage?.name}
                </span>
                <span
                  className="bg-red-500 p-1 text-white rounded ml-1 text-sm font-bold cursor-pointer"
                  onClick={() => setSelectedImage(null)}
                >
                  Kaldır
                </span>
              </div>
            )}
          </div>

          <Button
            variant="contained"
            className="bg-blue-500"
            onClick={publishPost}
          >
            Paylaş
          </Button>
        </div>
      </div>
    </div>
  );
}
