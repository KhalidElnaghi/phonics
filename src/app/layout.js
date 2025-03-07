import { Geist, Geist_Mono, Baloo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Adjust weights as needed
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "phonics",
  description: "The Ultimate Phonics Learning App for Kids",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${baloo2.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
