import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ✅ Fonts
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata (PRO LEVEL 🔥)
export const metadata: Metadata = {
  title: {
    default: "RV Innovation Labs",
    template: "%s | RV Innovation Labs",
  },
  description:
    "RV Innovation Labs delivers AI SEO, scalable software solutions, and digital transformation services for modern businesses.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "RV Innovation Labs",
    description:
      "AI SEO & scalable software solutions for modern businesses.",
    url: "https://yourdomain.com", // 👉 change later
    siteName: "RV Innovation Labs",
    images: [
      {
        url: "/og-image.png", // 👉 add this image later
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

// ✅ Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}