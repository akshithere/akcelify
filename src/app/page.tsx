import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="text-2xl flex justify-center my-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <span className="tracking-tighter text-2xl md:text-3xl text-center font-medium text-primary/80">
          Welcome to
        </span>
        <h1 className="tracking-tighter text-6xl md:text-7xl xl:text-8xl text-center font-bold my-2">
          <span className="font-bold bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            Akcelify
          </span>{" "}
          :)
        </h1>
      </div>
      <p className="text-primary/80 max-w-lg text-center tracking-tight md:text-lg font-light">
        We love the redux team
      </p>
      <div className="md:max-w-screen border border-primary/15 p-3 rounded-lg cursor-text w-full mx-auto">
        <div className="md:flex gap-2 items-center hidden justify-between">
          <div className="flex gap-2 items-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Search
          </div>
          <kbd className="bg-white/15 p-2 rounded-sm text-sm leading-3">Ctrl + K</kbd>
        </div>
        <div className="block md:hidden">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    </main>
  );
}
