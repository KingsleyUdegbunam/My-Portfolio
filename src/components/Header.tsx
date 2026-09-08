"use client";

import { useState, useEffect } from "react";
import { useLenis } from "../provider/LenisContext";

export default function Header() {
  const [navHidden, setNavHidden] = useState<boolean>(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const handleScroll = ({ scroll }: { scroll: number }) => {
      setNavHidden(scroll > window.innerHeight * 1.3);
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  const navArray = [
    { title: "HOME", link: "#" },
    { title: "WORK", link: "#works" },
    { title: "CONNECT", link: "#contact" },
  ];

  return (
    <header
      className={`fixed! text-white! top-0 z-30! w-full
    flex justify-between
    py-[1.2rem] px-[0.7rem] md:px-4
    bg-[linear-gradient(to_top,rgba(0,0,0,0),hsla(0,0%,0%,0.198))]
    backdrop-blur-[1px]
    transition-transform duration-300 leading-none
    ${navHidden ? "-translate-y-25" : ""}`}
    >
      <h1 className="font-koulen! text-[clamp(1rem,5vw,2.8rem)]">KAY</h1>

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

      <span>[2026]</span>
    </header>
  );
}
