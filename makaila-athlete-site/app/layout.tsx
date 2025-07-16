import type { Metadata } from "next";
import "./globals.css";
import StickyNav from "../components/StickyNav";

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
      <body className="antialiased bg-white text-[#00205B] font-inter min-h-screen flex flex-col">
        <StickyNav />
        <main className="flex-1 w-full mx-auto px-4 flex flex-col items-center justify-start">
          {children}
        </main>
        <footer className="w-full py-8 flex flex-col items-center border-t-4 border-[#FFC72C] mt-8 bg-white">
          <div className="flex space-x-6 mb-2">
            <a href="https://twitter.com/SoftballMakaila" target="_blank" rel="noopener noreferrer" className="text-[#00205B] hover:text-[#FFC72C] font-bold transition">Twitter</a>
            <a href="https://instagram.com/makailasoftball24" target="_blank" rel="noopener noreferrer" className="text-[#00205B] hover:text-[#FFC72C] font-bold transition">Instagram</a>
            <a href="#" className="text-[#00205B] hover:text-[#FFC72C] font-bold transition">SportsRecruits</a>
            <a href="#" className="text-[#00205B] hover:text-[#FFC72C] font-bold transition">SLCC Bruins Profile</a>
          </div>
          <div className="text-xs text-[#00205B]">&copy; {new Date().getFullYear()} Makaila Schneider. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
