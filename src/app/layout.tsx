import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Koulen } from "next/font/google";
import { Pinyon_Script } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-koulen",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-robotoMono",
});

export const metadata: Metadata = {
  title: "Kingsley Udegbunam | Portfolio.",
  description:
    "This is the frontend development portfilio of Kingsley Kenechukwu Udegbunam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${koulen.variable} ${pinyon.variable} ${robotoMono.variable}`}
      >
        <ReactLenis id="root" />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
