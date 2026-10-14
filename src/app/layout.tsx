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

export const metadata: Metadata = {
  icons: {
    icon: { url: "/images/logo-gico-coop.png", type: "image/png" },
    shortcut: "/images/logo-gico-coop.png",
    apple: "/images/logo-gico-coop.png",
  },
  title: "GiCo | Cooperativa Sociale e Formazione",
  description: "GiCo Cooperativa Sociale: inclusione, accoglienza e formazione professionale. Scopri il Centro Sociale Le Perle Preziose e il Centro di Formazione Edoardo Apicella.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
