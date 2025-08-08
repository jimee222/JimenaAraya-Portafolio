import { useEffect, useState } from "react";
import logo from "../../public/logo.png";
export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<JimenaAraya.dev />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center space-y-6 text-center">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo Jimena Araya"
        className="h-16 md:h-24 opacity-90"
      />

      {/* Barra de carga */}
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#8c52ff] shadow-[0_0_15px_#8c52ff] animate-loading-bar"></div>
      </div>

      <div className="text-2xl mt-4 md:text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
    </div>
  );
};
