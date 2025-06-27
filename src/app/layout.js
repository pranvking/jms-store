// app/layout.js (or your RootLayout file)
"use client";

import { usePathname } from "next/navigation";
import Footer from "./component/footer/footer";
import Navbar from "./component/navbar/navBar";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Hide Navbar only on home page "/"
  const hideNavbar = pathname === "/homea" || pathname === "/profile" ||pathname==="/purchaseMenu";
  const hideFooter = pathname === "";
  return (
    <html lang="en">
      <body className="bg-backGround">
        {!hideNavbar && <Navbar />}
        {children}
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
