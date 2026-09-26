"use client";

import { useLenis } from "@/provider/LenisContext";
import { useEffect } from "react";

export function ScrollToHash() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;
    if (!hash) return;
    const raf = requestAnimationFrame(() => {
      lenis.scrollTo(hash, { offset: 0, duration: 1.2 });
    });

    return () => cancelAnimationFrame(raf);
  }, [lenis]);

  return null;
}
