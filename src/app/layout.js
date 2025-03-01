import Navbar from "@/component/navBar/navBar";
import "./globals.css";
import Footer from "@/component/footer/footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-backGround"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
