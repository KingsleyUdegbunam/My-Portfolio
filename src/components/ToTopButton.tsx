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
        className="mx-auto p-2 font-koulen! text-white border-b-2 border-transparent hover:border-white hover:text-white/90! duration-200 transition-colors"
      >
        Back to Top
      </button>
    </div>
  );
}
