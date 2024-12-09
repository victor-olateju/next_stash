import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "./components/navigation";

import {
  ClerkProvider
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const header_footer = "bg-slate-900 p-4 text-white text-center"

  return <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header className={header_footer}>
          {/* <p>Welcome to Next Crash</p> */}
          <Navigation />
        </header>


        {children}

        <footer className={header_footer}>
          Victor Olateju
        </footer>
      </body>
    </html>
  </ClerkProvider>
}
