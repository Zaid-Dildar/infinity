import LeftBar from "@/components/sidebars/leftbar/LeftBar";
import { Inter } from "next/font/google";
import "../globals.css";
import RightBar from "@/components/sidebars/rightbar/RightBar";

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
        <div className="p-4 mr-2 lg:ml-64 lg:mr-72 mb-10">
          <LeftBar />
          <RightBar />
          {children}
        </div>
      </body>
    </html>
  );
}
