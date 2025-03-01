import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navBar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-backGround">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
