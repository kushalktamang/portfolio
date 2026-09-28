import type { Metadata } from "next";
import { Arimo, Geist_Pixel, Instrument_Serif, Victor_Mono } from "next/font/google";
import "@/_css/globals.css";
import SmoothScroll from "@/_components/ui/scroll";

const victorMono = Victor_Mono({
  variable: "--font-victor-mono",
  subsets: ["latin"],
  fallback: ["ui-monospace", "monospace"],
});

const geistPixel = Geist_Pixel({
  variable: "--font-geist-pixel",
  subsets: ["latin"],
  fallback: ["ui-monospace", "monospace"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: "kushalktamang",
  description: "Welcome to my personal website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${victorMono.variable} ${geistPixel.variable} ${instrumentSerif.variable} ${arimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
