import SidebarCard from "./components/SidebarCard";
import PopularUserCard from "./components/PopularUserCard";
import PopularContentCard from "./components/PopularContentCard";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <SidebarCard
          title="Popüler Kullanıcılar"
          component={<PopularUserCard />}
        />

        <SidebarCard
          title="Popüler İçerikler"
          component={<PopularContentCard />}
        />
      </div>
    </>
  );
}
