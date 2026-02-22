import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RailBites — Premium On-Train Dining",
  description: "Order fresh, hot food delivered directly to your train seat. Live tracking, AI recommendations, and secure escrow payments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} bg-zinc-950 text-zinc-50 antialiased min-h-screen flex flex-col selection:bg-orange-500/30`}>
        {/* Global ambient background glow */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-[150%] h-[500px] bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent blur-[120px] rounded-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-orange-600/10 to-transparent blur-[100px] rounded-full opacity-30"></div>
        </div>

        <Nav />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
