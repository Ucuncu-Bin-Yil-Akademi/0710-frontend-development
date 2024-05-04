"use client";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
export default function Page404() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <SentimentDissatisfiedIcon sx={{ fontSize: 100 }} />
        <h1 className="text-3xl font-bold">404</h1>
        <h2 className="text-xl font-bold">Aradığınız sayfa bulunamadı...</h2>
        <button
          className="bg-blue-400 p-5 rounded text-white"
          onClick={() => (window.location.href = "/")}
        >
          Anasayfaya Git
        </button>
      </div>
    </div>
  );
}
