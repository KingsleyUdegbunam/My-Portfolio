"use client";

import { useLenis } from "../provider/LenisContext";

export function ToTopBtn({ color = "black" }: { color: string }) {
  const lenis = useLenis();
  return (
    <div className="relative flex justify-center z-10">
      <button
        onClick={() => {
          lenis?.scrollTo(0);
        }}
        className={`relative p-2 ${color}-white/70 border-transparent group hover:${color}-white/90! duration-200 transition-colors flex flex-col items-center gap-1.5 text-[14.5px]!`}
      >
        <div
          className={` size-[.4rem] opacity-0  group-hover:opacity-100 bg-${color}/90`}
        />
        <svg
          className="size-4 transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
