import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: { url: "/images/logo-gico-coop.png", type: "image/png" },
    shortcut: "/images/logo-gico-coop.png",
    apple: "/images/logo-gico-coop.png",
  },
  title: "GiCo | Cooperativa Sociale e Formazione",
  description: "GiCo Società Cooperativa Sociale: il Centro Sociale Polifunzionale per Disabili Le Perle Preziose e il Centro Studi, Orientamento e Formazione Professionale Edoardo Apicella a Trentola Ducenta.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
