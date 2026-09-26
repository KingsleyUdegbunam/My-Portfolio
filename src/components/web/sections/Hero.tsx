import Image from "next/image";
import Header from "../../Header";

export default function Hero() {
  return (
    <section className="relative md:bg-size-[560%] pb-6 md:pb-12 bg-[rgb(66, 66, 66)]">
      <div className="size-full inset-0 absolute bg-mist-400 overflow-hidden">
        <Image
          className="scale-[225%] object-[52%_250px] 2xl:scale-[200%] object-cover 2xl:object-[-25px_-60px]"
          src="/assets/landing.jpeg"
          fill
          alt="hero image"
        />
      </div>
      <div className="absolute z-10 size-full opacity-90 bg-black/90" />

      <section className="landing-page p-0! flex flex-col min-h-[110vh] justify-between">
        {<Header />}

        <div className="text-white/90 z-10 p-4 flex flex-col min-h-[90vh] justify-center text-center">
          <p className="font-koulen! text-[clamp(2.4rem,13vw,5.5rem)]!">
            Shaping The Web
          </p>
          <p className="font-koulen! text-[clamp(2.4rem,13vw,5.5rem)]!">
            With{" "}
            <span className="font-koulen! bg-red-800 p-2 text-[clamp(2.4rem,13vw,5.5rem)]!">
              Intent.
            </span>
          </p>
        </div>
      </section>

      <article className="relative px-4 z-10 max-w-[1800px] mx-auto!">
        <div className="flex flex-col gap-16 text-white/90">
          <div className="max-w-[80vw] lg:max-w-[68vw]">
            <p className="about-text text-[clamp(1rem,9vw,4.2rem)]! font-koulen! z-10 leading-[120%]">
              THIS IS THE FOLIO OF KINGSLEY KENECHUKWU UDEGBUNAM
              <span>[KAY]</span>, a creative frontend developer.
            </p>
          </div>

          <p className="text-[clamp(0.6rem,0.7vw,0.9rem)]! text-right opacity-50">
            [SCROLL DOWN]
          </p>
        </div>
      </article>
    </section>
  );
}
