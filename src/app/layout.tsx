import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";
import AuthProvider from "@/lib/actions/session-provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sklep Adriana - Ciuchy oraz Lifestyle",
  description:
    "Najlepszy sklep w internecie z ciuchami oraz przedmiotami hobbistycznymi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
