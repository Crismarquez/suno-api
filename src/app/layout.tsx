import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "suno api",
  description: "Use API to call the music generation service of suno.ai",
  keywords: ["suno", "suno.ai", "api", "music", "generation", "ai"],
  creator: "@gcui.art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll`} >
        <Header />
        <main className="flex flex-col items-center m-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
