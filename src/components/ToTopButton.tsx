"use client";

import { useLenis } from "../provider/LenisContext";

export function ToTopBtn() {
  const lenis = useLenis();
  return (
    <div className="flex justify-center z-10">
      <button
        onClick={() => {
          lenis?.scrollTo(0);
        }}
        className="mx-auto p-2 font-koulen! text-white/70 border-transparent group hover:text-white/90! duration-200 transition-colors flex items-center gap-1.5"
      >
        <div className="size-[.4rem] opacity-0 group-hover:opacity-100 bg-white/90" />
        Back to Top
      </button>
    </div>
  );
}
