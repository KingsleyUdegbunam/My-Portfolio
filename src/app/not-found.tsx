import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex flex-col justify-between h-screen p-4 md:px-6 text-white/90 bg-white">
      <div className="absolute inset-0">
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

      <div className="z-10">
        <p className="text-[clamp(10rem,60vw,25rem)]! text-center text-white/80 font-koulen! pt-12">
          404
        </p>
        <div className="flex justify-center z-10 ">
          <Link
            href="/"
            className="mx-auto p-2 font-koulen!  text-[clamp(1.3rem,10vw,1.5rem)]! text-white/70 hover:text-white/90 duration-200 flex items-center"
          >
            [ Return to Home ]
          </Link>
        </div>
      </div>
    </main>
  );
}

{
}
