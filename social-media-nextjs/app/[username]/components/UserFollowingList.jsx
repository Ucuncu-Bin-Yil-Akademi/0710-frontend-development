import UserCard from "./UserCard";
export default function UserFollowingList({ userData }) {
  return (
    <>
      <h2 className="my-3 text-lg text-gray-600">
        Toplam <b>{userData.following?.length || 0}</b> kişiyi takip ediyor
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {userData?.following?.map((user) => {
          return (
            <>
              <UserCard
                userId={user._id}
                firstname={user.name}
                lastname={user.lastname}
                username={user.username}
                followers={user.userFollowers}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
