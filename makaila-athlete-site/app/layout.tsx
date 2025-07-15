import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makaila Schneider | SLCC Bruins Softball | Athlete Profile",
  description: "Official athlete profile for Makaila Schneider, SLCC Bruins infielder. Stats, highlights, videos, and recruiting info.",
  openGraph: {
    title: "Makaila Schneider | SLCC Bruins Softball | Athlete Profile",
    description: "Official athlete profile for Makaila Schneider, SLCC Bruins infielder. Stats, highlights, videos, and recruiting info.",
    url: "https://schneiderham.github.io/makaila-athlete-site/",
    siteName: "Makaila Schneider Athlete Profile",
    images: [
      {
        url: "/public/next.svg", // Replace with Makaila's photo when available
        width: 800,
        height: 600,
        alt: "Makaila Schneider SLCC Bruins Softball",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makaila Schneider | SLCC Bruins Softball | Athlete Profile",
    description: "Official athlete profile for Makaila Schneider, SLCC Bruins infielder. Stats, highlights, videos, and recruiting info.",
    images: ["/public/next.svg"], // Replace with Makaila's photo when available
    creator: "@SoftballMakaila",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar placeholder */}
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
        {/* Footer placeholder */}
        <footer className="w-full py-6 flex flex-col items-center border-t border-[#0033A0] dark:border-[#FFC72C] mt-8 bg-white/80 dark:bg-black/60">
          <div className="flex space-x-6 mb-2">
            <a href="https://twitter.com/SoftballMakaila" target="_blank" rel="noopener noreferrer" className="text-[#0033A0] dark:text-[#FFC72C] hover:underline font-bold">Twitter</a>
            <a href="https://instagram.com/makailasoftball24" target="_blank" rel="noopener noreferrer" className="text-[#0033A0] dark:text-[#FFC72C] hover:underline font-bold">Instagram</a>
            <a href="#" className="text-[#0033A0] dark:text-[#FFC72C] hover:underline font-bold">SportsRecruits</a>
          </div>
          <div className="text-xs text-[#0033A0] dark:text-[#FFC72C]">&copy; {new Date().getFullYear()} Makaila Schneider. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
