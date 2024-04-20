import ContentCard from "./ContentCard";
import { useEffect, useState } from "react";
import { contentListDataAtom } from "@/app/atoms/contentListAtom";
import { useAtom } from "jotai";
import Masonry from "@mui/lab/Masonry";
import { getAllContents } from "@/app/services/publications";
import Swal2 from "sweetalert2";
import Pagination from "@mui/material/Pagination";

export default function ContentList() {
  const [contentListData, setContentListData] = useAtom(contentListDataAtom);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalContents: null,
  });

  const getPublicationList = async () => {
    await getAllContents(function (res) {
      if (res.status === 200) {
        setContentListData(res.data.publications);
        if (!pagination.totalContents) {
          setPagination({
            currentPage: res.data.currentPage,
            totalPages: res.data.totalPages,
            totalContents: res.data.totalPosts,
          });
        }
      } else {
        Swal2.fire({
          icon: "error",
          title: "Hata",
          text: "İçerikler getirilirken bir hata oluştu.",
        });
      }
    }, pagination.currentPage);
  };

  useEffect(() => {
    getPublicationList();
  }, [pagination]);

  const handlePageChange = (event, newPage) => {
    setPagination({
      ...pagination,
      currentPage: newPage,
    });
  };

  return (
    <div className="pb-10">
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
              username={content.user[0].username}
              createdOn={content.createdAt}
              youtubeVideoCode={content.embedVideo}
            />
          );
        })}
      </Masonry>

      <div className="w-full flex justify-center my-10">
        <Pagination
          count={pagination.totalPages}
          color="primary"
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
