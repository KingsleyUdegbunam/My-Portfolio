import type { Metadata } from "next";
import { Koulen } from "next/font/google";
import { Pinyon_Script } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "../reset.css";
import "./global.css";
import { LenisProvider } from "../provider/LenisContext";

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
  authors: [
    { name: "Kingsley Udegbunam" },
    { url: "https://kingsleyudegbunam.netlify.app/" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body
        className={`${koulen.variable} ${pinyon.variable} ${robotoMono.variable}`}
      >
        <LenisProvider>
          <div id="root">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
