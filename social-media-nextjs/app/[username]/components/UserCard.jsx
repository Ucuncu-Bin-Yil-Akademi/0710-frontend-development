import Avatar from "@mui/material/Avatar";

export default function UserCard({
  userId,
  firstname,
  lastname,
  username,
  currentUserId,
  handleFollow,
  followers,
}) {
  return (
    <>
      <div className="border p-3 rounded-md">
        <div className="flex items-center gap-3">
          <Avatar sx={{ height: 64, width: 64 }}>
            {firstname[0] + lastname[0]}
          </Avatar>
          <div className="flex flex-col">
            <span className="text-lg text-gray-600">
              {firstname} {lastname}
            </span>
            <span className="text-gray-400">@{username}</span>
          </div>
        </div>

        <div className="mt-3">
          {followers?.includes(currentUserId) ? (
            <button
              className="bg-blue-500 w-full rounded text-white py-2"
              onClick={() => handleFollow(userId)}
            >
              Takipten Çıkart
            </button>
          ) : (
            <button
              className="bg-blue-500 w-full rounded text-white py-2"
              onClick={() => handleFollow(userId)}
            >
              Takip Et
            </button>
          )}
        </div>
      </div>
    </>
  );
}
