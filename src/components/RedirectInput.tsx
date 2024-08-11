"use client";
import { useState } from "react";

const RedirectInput: React.FC = () => {
  const [url, setUrl] = useState<string>("");

  const handleRedirect = () => {
    if (url) {
      const validUrl = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
      window.location.href = "https://askthiswebsite-rho.vercel.app/" + validUrl;
    }
  };

  return (
    <div className="w-full text-white flex items-center justify-center px-2">
      <input
        type="text"
        className="border-2 px-2 py-2 rounded-md rounded-r-none  border-zinc-800 w-[60%]"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste your link here"
      />
      <button className="w-[5rem] bg-blue-900 px-5 py-2.5 rounded-md rounded-l-none font-bold" onClick={handleRedirect}>Chat</button>
    </div>
  );
};

export default RedirectInput;
