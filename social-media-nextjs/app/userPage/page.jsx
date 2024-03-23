import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import CoverImg from "@/public/cover.jpg";

export default function UserPage() {
  return (
    <>
      <div>
        <div className="flex items-center">
          <div className="w-full relative">
            <Image
              className="w-full h-72 object-cover rounded-lg"
              src={CoverImg}
              alt="John Doe"
              height={1200}
              width={600}
            />
            <div
              className="flex flex-col justify-between absolute top-0 h-full w-full text-gray-300"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Avatar>OP</Avatar>
              <span>
                <h2>John Doe</h2>
                <p>@john_doe</p>
              </span>
              <span>3 gün 15 saat önce kayıt oldu</span>
              <span>
                Toplam <b>15</b> içerik
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse purus ipsum, gravida nec suscipit sollicitudin,
                facilisis in arcu. Etiam diam orci, aliquam vitae dignissim et,
                ultricies nec purus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
