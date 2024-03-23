import ContentCard from "./ContentCard";

export default function ContentList() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-600 my-10">
        Son Paylaşılan İçerikler
      </h1>
      <div className="grid grid-cols-3 gap-5 pb-10">
        <ContentCard />

        <ContentCard />

        <ContentCard />

        <ContentCard />

        <ContentCard />

        <ContentCard />

        <ContentCard />

        <ContentCard />
      </div>
    </>
  );
}
