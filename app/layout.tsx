
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { ReactNode } from "react";
import { AuthContextProvider } from "../app/context/AuthContext";
import Loader from "./animations/Loader";
import TopTag from "./components/TopTag";
import { Navbar } from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AmbientStorez",
  description: "World leading stores in Products",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthContextProvider >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className=" w-full h-auto relative mx-auto">
          
              <Loader />
              <TopTag />
              <Navbar />
              {children}
            </main>
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}