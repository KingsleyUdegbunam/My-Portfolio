"use client";

import { useRef, useState, useEffect } from "react";

export default function Header() {
  const [navHidden, setNavHidden] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const verticalScrollOrigin = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      verticalScrollOrigin.current = window.innerHeight * 1.1;

      if (currentScrollY > verticalScrollOrigin.current) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navArray = [
    { title: "HOME", link: "#" },
    { title: "WORK", link: "#works" },
    { title: "CONNECT", link: "#contact" },
  ];

  return (
    <header
      ref={headerRef}
      className={`header bg-[linear-gradient(to_top,rgba(0,0,0,0),hsla(0,0%,0%,0.198))] backdrop-blur-[1px] flex justify-between py-[1.2rem] px-[0.7rem] md:px-4 fixed! w-full z-20! transition-transform duration-300 leading-none ${navHidden ? "-translate-y-25" : ""}`}
    >
      <h1 className="font-koulen! text-[clamp(1rem,5vw,2.8rem)]">KAY</h1>

      <nav>
        <ul className="mix-blend-difference flex flex-col gap-[0.4rem]">
          {navArray.map((link) => (
            <li className="hover:italic text-[12px] hover:list-[square] focus:italic focus:list-[square]">
              <a key={link.title} href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <span>[2026]</span>
    </header>
  );
}
