"use client";
import { CSSProperties, useState } from "react";
import { useLenis } from "../../../provider/LenisContext";

export default function Contact() {
  const lenis = useLenis();

  const [_, setIsHover] = useState(false);
  const EmailAddress = "infodevkay@gmail.com";
  const contactLinks = [
    {
      link: "mailto:infodevkay@gmail.com",
      medium: "Email",
      color: "black",
      mail: "infodevkay@gmail.cccom",
    },
    {
      link: "https://github.com/KingsleyUdegbunam",
      medium: "github",
      color: "#24292e",
      mail: null,
    },
    {
      link: "https://www.linkedin.com/in/kingsley-udegbunam",
      medium: "LinkedIn",
      color: "#0072B1",
      mail: null,
    },
  ];
  return (
    <footer
      id="contact"
      className="flex flex-col justify-between p-4 md:px-6 text-white/90"
    >
      <div className="bg-position-[70%] md:bg-position-[0_62%] flex flex-col justify-between relative bg-[url(/assets/connect.jpeg)] bg-cover p-12 min-h-[calc(100dvh-2rem)]">
        <div className="absolute size-full overlay-footer bg-[radial-gradient(transparent,black)] top-0 left-0 opacity-60"></div>

        <div className="z-10 flex items-center justify-center gap-4 font-semibold leading-1 flex-wrap">
          <p className="text-[4rem]!  sm:text-[4rem]! text-center font-koulen! pt-12">
            LET'S
          </p>
          <p className="text-[4rem]! sm:text-[4rem]! text-center font-koulen! pt-12">
            CONNECT
          </p>
        </div>

        <div className="flex flex-col justify-center items-center ">
          {contactLinks.map((c) => {
            let displayMail = false;
            const mail = "infodevkay@gmail.com";
            return (
              <a
                key={c.medium}
                draggable="false"
                onMouseEnter={() => {
                  if (c.medium !== "Email") return;
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  if (c.medium !== "Email") return;
                  setIsHover(false);
                }}
                style={{ "--hover-color": c.color } as CSSProperties}
                className="py-3 px-2 md:py-6 md:px-4 uppercase group border-b-2 border-white/50 text-white/90 flex justify-between w-[85%] items-center transition-colors duration-200 gap-4 font-koulen! text-[1.5rem]! z-10 hover:bg-(--hover-color)/80 group"
                href={c.link}
              >
                <span>
                  {c.medium === "Email" ? (
                    <>
                      <span className="group-hover:hidden font-koulen! text-[1.3rem]!">
                        Email
                      </span>
                      <span className="hidden group-hover:inline font-koulen! text-[1.3rem]!">
                        infodevkay@gmail.com
                      </span>
                    </>
                  ) : (
                    <span className="font-koulen! text-[1.3rem]!">
                      {c.medium}
                    </span>
                  )}
                </span>

                <svg
                  className="size-4 text-white! rotate-45! transition-colors duration-300 group-hover:text-red-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </a>
            );
          })}
        </div>

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
      </div>
    </footer>
  );
}
