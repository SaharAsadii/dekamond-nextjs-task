import type { Metadata } from "next";
import localFont from "next/font/local";
import { AuthProvider } from "@/context/auth-context";
import { Footer, Header } from "@/components";
import "./globals.css";

const iranSansWeb = localFont({
  src: [
    {
      path: "../public/fonts/IRANSansWeb(FaNum).woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansWeb(FaNum).woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansWeb(FaNum).ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-iran-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dekamond App",
  description: "Auth App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranSansWeb.variable}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
