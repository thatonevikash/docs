import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";

import { ThemeProvider } from "@/theme/theme-provider";

// -----------------------------------------------------------

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "docs | thatonevikash",
  description: `Explore docs and learn things you've never learnt yet.
    Whether you're an absolute beginner or an experienced developer,
    thatonevikash/docs have something for everyone.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider> {children} </ThemeProvider>
      </body>
    </html>
  );
}
