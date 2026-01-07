import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ceejay Xiong",
  description: "Ceejay Xiong Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4 md:p-8">{children}</div>
      </body>
    </html>
  );
}
