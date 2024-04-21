import UserCard from "./UserCard";
export default function UserFollowersList({
  userData,
  currentUserId,
  handleFollow,
}) {
  return (
    <>
      <h2 className="my-3 text-lg text-gray-600">
        Toplam <b>{userData.userFollowers?.length || 0}</b> kişi tarafından
        takip ediliyor
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {userData?.userFollowers?.map((user) => {
          return (
            <>
              <UserCard
                userId={user._id}
                firstname={user.name}
                lastname={user.lastname}
                username={user.username}
                currentUserId={currentUserId}
                handleFollow={handleFollow}
                followers={user.userFollowers}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
