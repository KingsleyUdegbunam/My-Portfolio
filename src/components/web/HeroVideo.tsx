"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({
  src,
  scale = false,
}: {
  src: string;
  scale?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});

    const retry = () => video.play().catch(() => {});

    window.addEventListener("pointerdown", retry, { once: true });

    return () => window.removeEventListener("pointerdown", retry);
  }, []);

  return (
    <video
      ref={videoRef}
      className={`object-cover object-top h-full w-full  ${scale ? "scale-105" : ""}`}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      controls={false}
      src={src}
    />
  );
}
