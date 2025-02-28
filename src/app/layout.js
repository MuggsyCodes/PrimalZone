import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Primal Zone",
  description: "Hormonal Treatment Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen w-full relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
