// import Image from "next/image";
// import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="text-2xl flex justify-center my-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* <span className="tracking-tighter text-2xl md:text-3xl text-center font-medium text-primary/80">
          Welcome to
        </span> */}
        <h1 className="tracking-tighter text-6xl md:text-7xl xl:text-8xl text-center font-bold my-2">
          <span className="font-bold bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            Akcelify
          </span>{" "}
          :)
        </h1>
      </div>
      <p className="text-primary/80 max-w-lg text-center tracking-tight md:text-lg font-light">
        OSDC for the win
      </p>
      <div className="md:max-w-screen border border-primary/15 p-3 rounded-lg cursor-text w-full mx-auto">
          Go to the blogs section please ✨

🐰💗🥺 🌸🌷🧸 🍓🥹💕 ✨💞🐻

      </div>
    </div>
    </main>
  );
}
