import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/ui/header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "syou's my page",
  description: "Infomation about syou.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div>
        <Header/>
      </div>
      <div className={inter.className}>{children}</div>
      
    </html>
  );
}
