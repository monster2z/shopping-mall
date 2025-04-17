import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">내 쇼핑몰</a>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-300">홈</a></li>
                <li><a href="/products" className="hover:text-gray-300">상품</a></li>
                <li><a href="/about" className="hover:text-gray-300">소개</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2025 내 쇼핑몰. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}