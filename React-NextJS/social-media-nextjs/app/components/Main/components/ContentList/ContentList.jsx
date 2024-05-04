import ContentCard from "./ContentCard";
import { useEffect, useState } from "react";
import { contentListDataAtom } from "@/app/atoms/contentListAtom";
import { useAtom } from "jotai";
import Masonry from "@mui/lab/Masonry";
import { getAllContents } from "@/app/services/publications";
import Swal2 from "sweetalert2";
import InfiniteScroll from "react-infinite-scroll-component";
import { searchValueAtom } from "@/app/atoms/searchAtom";

export default function ContentList() {
  const [contentListData, setContentListData] = useAtom(contentListDataAtom);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useAtom(searchValueAtom);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalContents: null,
  });

  const getPublicationList = async () => {
    await getAllContents(
      function (res) {
        if (res.status === 200) {
          if (!search && search !== "") {
            const currentContents = contentListData;
            const newContents = res.data.publications;
            let mergedContent = [...currentContents, ...newContents];
            setContentListData(mergedContent);
          } else {
            setContentListData(res.data.publications);
          }
          if (!pagination.totalContents) {
            setPagination({
              currentPage: res.data.currentPage,
              totalPages: res.data.totalPages,
              totalContents: res.data.totalPosts,
            });
          }

          if (res.data.totalPages === pagination.currentPage) setHasMore(false);
        } else {
          Swal2.fire({
            icon: "error",
            title: "Hata",
            text: "İçerikler getirilirken bir hata oluştu.",
          });
        }
      },
      pagination.currentPage,
      search
    );
  };

  useEffect(() => {
    getPublicationList();
  }, [pagination, search]);

  const getMoreContents = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    });
  };

  return (
    <div className="pb-10">
      <h1 className="text-2xl font-bold text-gray-600 my-10">
        Son Paylaşılan İçerikler
      </h1>
      <InfiniteScroll
        dataLength={contentListData.length}
        next={() => getMoreContents()}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Bütün içerikleri görüntülediniz.</b>
          </p>
        }
      >
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
      </InfiniteScroll>
    </div>
  );
}
