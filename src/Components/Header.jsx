import { useRef, useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [upwardScroll, setUpwardScroll] = useState(false);
  const scrollref = useRef(window.scrollY);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollref.current) {
        setUpwardScroll(true);
      } else {
        setUpwardScroll(false);
      }
      scrollref.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    upwardScroll === true
      ? headerRef.current.classList.add("hide-header")
      : headerRef.current.classList.remove("hide-header");
  }, [upwardScroll]);
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
