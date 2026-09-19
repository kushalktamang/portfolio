import type { Metadata } from "next";
import { Geist_Pixel, Victor_Mono } from "next/font/google";
import "@/_css/globals.css";

const victorMono = Victor_Mono({
  variable: "--font-victor-mono",
});

const geistPixel = Geist_Pixel({
  variable: "--font-geist-pixel",
  subsets: ["latin"],
  fallback: ["ui-monospace", "monospace"],
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
      className={`${victorMono.variable} ${geistPixel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
