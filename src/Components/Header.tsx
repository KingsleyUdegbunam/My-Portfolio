"use client";

import { useRef, useState, useEffect } from "react";
import "./Header.css";

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

  useEffect(() => {
    if (!headerRef.current) return;
    navHidden === true
      ? headerRef.current.classList.add("hide-header")
      : headerRef.current.classList.remove("hide-header");
  }, [navHidden]);

  return (
    <header ref={headerRef} className="header">
      <h1>KAY</h1>

      <nav>
        <ul>
          <li className="nav-li">
            <a href="#">HOME</a>
          </li>
          <li className="nav-li">
            <a href="#works">WORK</a>
          </li>
          <li className="nav-li">
            <a href="#contact">CONNECT</a>
          </li>
        </ul>
      </nav>

      <span>[2026]</span>
    </header>
  );
}
