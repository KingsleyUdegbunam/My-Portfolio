import Link from "next/link";

export function CloseProjectBtn() {
  return (
    <Link
      href="/#works"
      scroll={false}
      className="text-[14px]! z-3 bg-black/50 text-white/80 p-2 px-6 fixed top-4 left-4 hover:bg-black/60 duration-300"
    >
      Close
    </Link>
  );
}
