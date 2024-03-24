import UserCard from "./UserCard";
export default function UserFollowersList() {
  return (
    <>
      <h2 className="my-3 text-lg text-gray-600">
        Toplam <b>50</b> kişi tarafından takip ediliyor
      </h2>
      <div className="grid grid-cols-5 gap-5">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
}
