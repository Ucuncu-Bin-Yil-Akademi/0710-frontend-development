"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLayoutVisible, setIsLayoutVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const isCookieExists = Cookies.get("userToken");

    if (pathname !== "/login") {
      if (!isCookieExists) {
        window.location.href = "/login";
        return;
      }
      setIsLayoutVisible(true);
    } else {
      if (isCookieExists) {
        window.location.href = "/";
        return;
      }
    }
    setIsLoading(false);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading ? (
          <div className="h-screen w-full flex justify-center items-center">
            <CircularProgress />
          </div>
        ) : (
          <>
            {isLayoutVisible && <Header />}

            <div className="h-screen w-full flex flex-col justify-between">
              <div className="flex p-6 justify-between w-full gap-5 h-full">
                <div className={isLayoutVisible ? "w-4/6" : "w-full"}>
                  {children}
                </div>
                {isLayoutVisible && (
                  <div className="w-2/6">
                    <Sidebar />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
