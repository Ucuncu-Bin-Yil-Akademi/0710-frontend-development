"use client";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import CoverImg from "@/public/cover.jpg";
import styles from "./UserPage.module.css";
import UserMain from "./components/UserMain";
import { getUserProfile, followProfile } from "@/app/services/users";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { dateFormatter } from "@/app/utils/dateFormatter";

export default function UserPage() {
  const [userData, setUserData] = useState(null);
  const [isOwnProfile, setIsOwnProfile] = useState(true);
  const pathname = usePathname();
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleGetUserProfileData = async () => {
    if (!pathname) return;

    const username = pathname?.split("/")[1];
    await getUserProfile(function (response) {
      if (response.status === 200) {
        setUserData(response.data);
        const _currentUserData = localStorage.getItem("loggedUserInfo");
        const currentUserData = JSON.parse(_currentUserData);

        if (currentUserData._id) setCurrentUserId(currentUserData._id);

        if (currentUserData?.username !== response.data?.username) {
          setIsOwnProfile(false);
        }
      } else {
        window.location.href = "/404";
      }
    }, username);
  };

  useEffect(() => {
    handleGetUserProfileData();
  }, [pathname]);

  const handleFollow = async (id) => {
    if (!id) return;
    await followProfile(function (response) {
      if (response.status === 200) handleGetUserProfileData();
    }, id);
  };

  return (
    <>
      {userData && (
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
                    <Avatar sx={{ width: 96, height: 96 }}>
                      {userData.name[0] + userData.lastname[0]}
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="flex items-center gap-3">
                        <h2 className="text-xl">
                          {userData.name} {userData.lastname}
                        </h2>
                        <p className="text-sm font-semibold text-gray-400">
                          @{userData.username}
                        </p>
                      </span>
                      <span>
                        Toplam <b>{userData.publications?.length || 0}</b>{" "}
                        içerik
                      </span>
                      <span>
                        Kayıt Olma Tarihi: {dateFormatter(userData.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div className={styles.followSection}>
                    {!isOwnProfile && (
                      <>
                        {userData.userFollowers?.find(
                          (user) => user._id === currentUserId
                        ) ? (
                          <button
                            className="bg-blue-500 w-1/4 rounded text-white py-5"
                            onClick={() => handleFollow(userData._id)}
                          >
                            Takipten Çıkart
                          </button>
                        ) : (
                          <button
                            className="bg-blue-500 w-1/4 rounded text-white py-5"
                            onClick={() => handleFollow(userData._id)}
                          >
                            Takip Et
                          </button>
                        )}
                      </>
                    )}
                  </div>
                  <div className="p-5">
                    <p className={styles.biography}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer eget sollicitudin orci. Aenean id arcu ac elit
                      aliquet hendrerit vel vel felis. Cras massa nisl,
                      ultricies nec ipsum quis, euismod faucibus lectus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <UserMain
              userData={userData}
              currentUserId={currentUserId}
              handleFollow={handleFollow}
            />
          </div>
        </>
      )}
    </>
  );
}
