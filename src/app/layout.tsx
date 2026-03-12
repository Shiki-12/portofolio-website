import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // 1. TAMBAHIN INI BIAR NEXT.JS TAU DOMAIN ASLI LU
  metadataBase: new URL('https://gshiki.my.id'), 
  
  title: "Shiki — Link in Bio",
  description: "Developer & Creator · Building the future, one line of code at a time.",
  icons: {
    icon: '/favicon.ico', 
  },
  openGraph: {
    title: "Shiki — Link in Bio",
    description: "Developer & Creator · Building the future, one line of code at a time.",
    url: "https://gshiki.my.id",
    siteName: "Shiki Main Lobby",
    images: [
      {
        url: "https://gshiki.my.id/og-main.png", 
        width: 1200,
        height: 630,
        alt: "Shiki - Main Lobby",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiki — Link in Bio",
    description: "Developer & Creator · Building the future, one line of code at a time.",
    images: ["https://gshiki.my.id/og-main.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
