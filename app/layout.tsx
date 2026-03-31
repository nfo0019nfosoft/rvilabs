import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
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

// ✅ SEO Metadata (FIXED TYPE 🔥)


export const metadata: Metadata = {
  metadataBase: new URL("https://rvilabs.vercel.app"),

  title: {
    default: "RvI Labs",
    template: "%s | Rv Innovations Labs",
  },

  description: "Smart Software. Real Impact.",

  openGraph: {
    title: "RvI Labs",
    description: "Smart Software. Real Impact.",
    url: "https://rvilabs.vercel.app",
    siteName: "Rv Innovations Labs",
    images: [
      {
        url: "/og-image.png",
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
      <head>
        {/* 🔥 FONT AWESOME ADD HERE */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>

      <body
        className={`${ubuntu.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <LayoutWrapper>
  {children}
</LayoutWrapper>
      </body>
    </html>
  );
}