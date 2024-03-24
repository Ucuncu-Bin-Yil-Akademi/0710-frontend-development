import UserCard from "./UserCard";
export default function UserFollowingList() {
  return (
    <>
      <h2 className="my-3 text-lg text-gray-600">
        Toplam <b>18</b> kişiyi takip ediyor
      </h2>
      <div className="grid grid-cols-5 gap-5">
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
