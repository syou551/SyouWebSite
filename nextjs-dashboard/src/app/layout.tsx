import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/ui/header';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "syou's my page",
  description: "Infomation about syou551.dev",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div>
          <Header/>
        </div>
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
