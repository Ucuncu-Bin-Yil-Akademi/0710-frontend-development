import Avatar from "@mui/material/Avatar";

export default function UserCard() {
  return (
    <>
      <div className="border p-3 rounded-md">
        <div className="flex items-center gap-3">
          <Avatar sx={{ height: 64, width: 64 }}>JD</Avatar>
          <div className="flex flex-col">
            <span className="text-lg text-gray-600">John Doe</span>
            <span className="text-gray-400">@john_doe</span>
          </div>
        </div>

        <div className="mt-3">
          <button className="bg-blue-500 w-full rounded text-white py-1">
            Takip Et
          </button>
        </div>
      </div>
    </>
  );
}
