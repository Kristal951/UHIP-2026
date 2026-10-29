import type { Metadata } from "next";
import { Manrope, Montaga } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const montaga = Montaga({
  variable: "--font-montaga",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UHIP 2026",
  description: "Unlocking Halal & Halalpreneurship Investments Programme",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${montaga.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen w-full overflow-x-clip">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}