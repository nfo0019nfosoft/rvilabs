"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 👉 check if admin route
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {/* ✅ Navbar only for NON-admin */}
      {!isAdmin && <Navbar />}

      {children}

      {/* ✅ Footer only for NON-admin */}
      {!isAdmin && <Footer />}
    </>
  );
}