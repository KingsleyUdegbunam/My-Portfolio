"use client";

import { useState } from "react";
import { HomeNav } from "./HomeNav";

export default function Header() {
  const [navHidden, setNavHidden] = useState<boolean>(false);

  return (
    <header
      className={` fixed! text-white! top-0 z-30! w-full 
    
    py-[1.2rem] px-[0.7rem] md:px-4
    bg-[linear-gradient(to_top,rgba(0,0,0,0),hsla(0,0%,0%,0.198))]
    backdrop-blur-[1px]
    transition-transform duration-300 leading-none
    ${navHidden ? "-translate-y-25" : ""}`}
    >
      <div className="max-w-[1800px] mx-auto! flex justify-between">
        <h1 className="font-koulen! text-[clamp(1rem,5vw,2.8rem)]">KAY</h1>

        <HomeNav setNavHidden={setNavHidden} />

        <span>[2026]</span>
      </div>
    </header>
  );
}
