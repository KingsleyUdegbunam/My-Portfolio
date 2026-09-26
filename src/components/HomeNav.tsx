"use client";

import { useLenis } from "@/provider/LenisContext";
import { Dispatch, SetStateAction, useEffect } from "react";
export function HomeNav({
  setNavHidden,
}: {
  setNavHidden: Dispatch<SetStateAction<boolean>>;
}) {
  const lenis = useLenis();

  const navArray = [
    { title: "HOME", link: "#" },
    { title: "WORK", link: "#works" },
    { title: "CONNECT", link: "#contact" },
  ];

  useEffect(() => {
    if (!lenis) return;
    const handleScroll = ({ scroll }: { scroll: number }) => {
      setNavHidden(scroll > window.innerHeight * 1.3);
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis, setNavHidden]);

  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {navArray.map((link) => (
          <li
            key={link.title}
            className="text-[12px] tracking-tighter hover:list-[square] hover:italic"
          >
            <button
              onClick={() => {
                lenis?.scrollTo(link.link);
              }}
            >
              {link.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
