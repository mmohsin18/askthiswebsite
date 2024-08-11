import RedirectInput from "@/components/RedirectInput";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col flex h-full items-center justify-center gap-8 w-full">
      <div className="text-white">
          <h1 className="font-bold text-5xl tracking-tighter p-4">Ask Any Website.</h1>
      </div>
      <div className="w-full">
        <RedirectInput />
      </div>
    </div>
  );
}
