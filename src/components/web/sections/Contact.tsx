import { CSSProperties } from "react";
import Image from "next/image";
import { ToTopBtn } from "../../ToTopButton";

export default function Contact() {
  const contactLinks = [
    {
      link: "mailto:infodevkay@gmail.com",
      medium: "Email",
      color: "black",
    },
    {
      link: "https://github.com/KingsleyUdegbunam",
      medium: "github",
      color: "#24292e",
    },
    {
      link: "https://www.linkedin.com/in/kingsley-udegbunam",
      medium: "LinkedIn",
      color: "#0072B1",
    },
  ];
  return (
    <footer
      id="contact"
      className="relative flex flex-col justify-between h-screen p-4 md:px-6 text-white/90 bg-white"
    >
      <div className="absolute inset-0 ">
        <div className="size-full! m-auto p-4  md:p-8">
          <div className="relative size-full!">
            <Image
              className="object-cover object-[70%] md:object-[0_62%]"
              src="/assets/connect.jpeg"
              alt="contact-background-image"
              fill
            />
          </div>
          <div className="absolute m-4! md:m-8! overlay-footer bg-[radial-gradient(transparent,black)] opacity-60 top-0 bottom-0 left-0 right-0" />
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto! w-full bg-cover p-12  size-full flex flex-col justify-between">
        <div className="z-10 flex items-center justify-center gap-4 font-semibold leading-1 flex-wrap ">
          <p className="text-[4rem]!  sm:text-[4rem]! text-center font-koulen! pt-12">
            LET&apos;S
          </p>
          <p className="text-[4rem]! sm:text-[4rem]! text-center font-koulen! pt-12">
            CONNECT
          </p>
        </div>

        <div className="flex flex-col justify-center items-center ">
          {contactLinks.map((c) => {
            return (
              <a
                key={c.medium}
                target="_blank"
                rel="noopener noreferrer"
                draggable="false"
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
        <ToTopBtn />
      </div>
    </footer>
  );
}
