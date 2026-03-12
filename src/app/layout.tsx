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
  // 1. KASIH TAU DOMAIN ASLINYA
  metadataBase: new URL('https://gshiki.my.id'),

  title: "Shiki — Developer & System Administrator",
  description: "Personal portfolio of Shiki — Frontend Developer, System Administrator, and Cybersecurity Enthusiast.",
  icons: {
    icon: '/portofolio/favicon.ico', 
  },
  openGraph: {
    title: "Shiki — Developer & System Administrator",
    description: "Personal portfolio of Shiki — Frontend Developer, System Administrator, and Cybersecurity Enthusiast.",
    url: "https://gshiki.my.id/portofolio",
    siteName: "Shiki Portfolio",
    images: [
      {
        url: "https://gshiki.my.id/portofolio/og-portofolio.png", 
        width: 1200,
        height: 630,
        alt: "Shiki - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiki — Developer & System Administrator",
    description: "Personal portfolio of Shiki — Frontend Developer, System Administrator, and Cybersecurity Enthusiast.",
    images: ["https://gshiki.my.id/portofolio/og-portofolio.png"], 
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
