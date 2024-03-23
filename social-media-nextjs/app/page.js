import { Header, Sidebar, Main } from "@/app/components";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <div className="">
        <Header />
      </div>
      <div className="flex p-6 justify-between w-full gap-5 h-full">
        <div className="w-4/6">
          <Main />
        </div>
        <div className="w-2/6">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
