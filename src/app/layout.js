import Footer from "./component/footer/footer";
import Navbar from "./component/navBar/navBar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-backGround"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
