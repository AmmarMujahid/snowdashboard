import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import LeftBar from "@/components/Leftbar";
import RightBar from "@/components/Rightbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <LeftBar />
          <div className="ml-[212px] mr-[280px]">
            <Header />
            {children}
          </div>
          <RightBar />
        </div>
      </body>
    </html>
  );
}
