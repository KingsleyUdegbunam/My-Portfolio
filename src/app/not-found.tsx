import Link from "next/link";

export default function NotFound() {
  return (
    <footer id="contact" className="flex flex-col justify-between p-4 md:px-6">
      <div className="bg-position-[70%] md:bg-position-[0_62%] flex flex-col justify-center relative bg-[url(/assets/connect.jpeg)] bg-cover p-12 min-h-[calc(100dvh-2rem)]">
        <div className="absolute size-full overlay-footer bg-[radial-gradient(transparent,black)] top-0 left-0 opacity-60"></div>

        <div className="z-10 flex items-center justify-center gap-4 font-semibold leading-tight  flex-wrap">
          <p className="text-[clamp(10rem,60vw,25rem)]! text-center text-white/80 font-koulen! pt-12">
            404
          </p>
        </div>

        <div className="flex justify-center z-10 ">
          <Link
            href="/"
            className="mx-auto p-2 font-koulen! text-white/90 text-[clamp(1.3rem,10vw,2rem)]!  border-b-2 border-b-transparent  hover:border-white/90 duration-200 transition-colors cursor-pointer!"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
