import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const LatoFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});



export const metadata: Metadata = {
  title: "Blockverse - Twój hosting!",
  description: "Blockverse hosting - najlepsze hostowanie serwerów minecraft",
  icons: {
    icon: "/logo-512.png",
    shortcut: "/logo-512.png",
    apple: "/logo-512.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={` ${LatoFont.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col smooth-scroll">
        <div className="sticky top-0 z-50 w-full  backdrop-blur-sm transition-all duration-300 ease-out">
          <Navbar />
        </div>
        {children}

        <Footer />
      </body>
    </html>
  );
}
