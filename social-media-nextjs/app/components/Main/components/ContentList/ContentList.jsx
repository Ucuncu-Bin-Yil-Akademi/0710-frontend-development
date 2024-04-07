import ContentCard from "./ContentCard";
import { useEffect, useState } from "react";
import { contentListDataAtom } from "@/app/atoms/contentListAtom";
import { useAtom } from "jotai";
import Masonry from "@mui/lab/Masonry";
import { getAllContents } from "@/app/services/publications";
import Swal2 from "sweetalert2";

export default function ContentList() {
  const [contentListData, setContentListData] = useAtom(contentListDataAtom);

  const getPublicationList = async () => {
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
  };

  useEffect(() => {
    getPublicationList();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-600 my-10">
        Son Paylaşılan İçerikler
      </h1>
      <Masonry columns={3} spacing={2}>
        {contentListData?.map((content) => {
          return (
            <ContentCard
              key={content._id}
              id={content._id}
              summary={content.content}
              imageUrl={content.images?.length > 0 ? content.images[0] : null}
              likes={content.likes}
              firstname={content.user[0].name}
              lastname={content.user[0].lastname}
              createdOn={content.createdAt}
            />
          );
        })}
      </Masonry>
    </>
  );
}
