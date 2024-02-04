import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infinity",
  description:
    "A Social media platform for random people from different corners of the world to socialize with each other.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
