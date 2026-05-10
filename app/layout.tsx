import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Grain } from "./components/grain";
import { ThemeManager } from "./components/theme-manager";

const geist = Geist({
  variable: "--font-geist",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wael Fadlallh — Senior Front-End Engineer",
  description:
    "Senior Front-End Engineer. I build banking apps that millions of people across the UAE and Egypt actually use — mostly in React, React Native and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body data-theme="dark" data-accent="lime">
        <ThemeManager />
        <Grain />
        {children}
      </body>
    </html>
  );
}
