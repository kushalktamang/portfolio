import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import "@/_css/globals.css";

const victorMono = Victor_Mono({
  variable: "--font-victor-mono",
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
      className={`${victorMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
