import ContentCard from "./ContentCard";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function ContentList() {
  const [contentListData, setContentListData] = useState([]);
  const userCookie = Cookies.get("userToken");

  const getAllContents = async () => {
    await axios
      .get("http://localhost:3000/publications", {
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setContentListData(response.data.publications);
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

  useEffect(() => {
    getAllContents();
  }, []);
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-600 my-10">
        Son Paylaşılan İçerikler
      </h1>
      <div className="grid grid-cols-3 gap-5 pb-10">
        {contentListData?.map((content) => {
          return (
            <ContentCard
              key={content._id}
              summary={content.content}
              imageUrl={content.images?.length > 0 ? content.images[0] : null}
              likes={content.likes.length}
              firstname={content.user[0].name}
              lastname={content.user[0].lastname}
              createdOn={content.createdAt}
            />
          );
        })}
      </div>
    </>
  );
}
