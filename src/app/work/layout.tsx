import React from "react";
import { ToTopBtn } from "../../components/ToTopButton";
import Link from "next/link";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-22 pb-6 relative flex flex-col items-center">
      <Link
        href="/"
        className="text-[14px]! z-3 bg-black/50 text-white/80 p-2 px-6 fixed top-4 left-4"
      >
        Close
      </Link>
      {children}
      <ToTopBtn color="black" />
    </div>
  );
}
