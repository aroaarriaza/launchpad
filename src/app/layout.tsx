import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://launchpad-aroa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elena Voss",
    template: "%s — Elena Voss",
  },
  description: "Diseñadora de producto y desarrolladora frontend afincada en Berlín.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Elena Voss",
    title: "Elena Voss",
    description: "Diseñadora de producto y desarrolladora frontend afincada en Berlín.",
  },
  twitter: {
    card: "summary",
    title: "Elena Voss",
    description: "Diseñadora de producto y desarrolladora frontend afincada en Berlín.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
