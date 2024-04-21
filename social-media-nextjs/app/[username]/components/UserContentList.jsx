import ContentCard from "@/app/components/Main/components/ContentList/ContentCard";

export default function UserContentList({ userData }) {
  return (
    <>
      <h2 className="my-3 text-lg text-gray-600">
        Toplam <b>{userData.publications?.length || 0}</b> içerik paylaşıldı
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {userData?.publications?.map((content) => {
          return (
            <>
              <ContentCard
                id={content._id}
                summary={content.content}
                imageUrl={content.images?.[0]}
                firstname={userData.name}
                lastname={userData.lastname}
                username={userData.username}
                createdOn={content.createdAt}
                likes={content.likes}
                youtubeVideoCode={content?.embedVideo || ""}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
