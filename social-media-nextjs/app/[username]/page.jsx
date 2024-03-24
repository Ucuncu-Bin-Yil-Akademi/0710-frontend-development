"use client";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import CoverImg from "@/public/cover.jpg";
import styles from "./UserPage.module.css";
import UserMain from "./components/UserMain";

export default function UserPage() {
  return (
    <>
      <div>
        <div className="flex items-center">
          <div className="w-full relative rounded">
            <Image
              className="w-full h-72 object-cover rounded-lg"
              src={CoverImg}
              alt="John Doe"
              height={1200}
              width={600}
            />
            <div className={styles.coverWrapper}>
              <div className="flex items-center gap-5 p-5">
                <Avatar sx={{ width: 96, height: 96 }}>OP</Avatar>
                <div className="flex flex-col">
                  <span className="flex items-center gap-3">
                    <h2 className="text-xl">John Doe</h2>
                    <p className="text-sm font-semibold text-gray-400">
                      @john_doe
                    </p>
                  </span>
                  <span>
                    Toplam <b>15</b> içerik
                  </span>
                  <span>3 gün 15 saat önce kayıt oldu</span>
                </div>
              </div>
              <div className={styles.followSection}>
                <button className="w-1/4 bg-blue-500 px-8 py-4 rounded">
                  Takip Et
                </button>
              </div>
              <div className="p-5">
                <p className={styles.biography}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eget sollicitudin orci. Aenean id arcu ac elit aliquet
                  hendrerit vel vel felis. Cras massa nisl, ultricies nec ipsum
                  quis, euismod faucibus lectus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UserMain />
      </div>
    </>
  );
}
