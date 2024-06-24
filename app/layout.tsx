
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { ModeToggle } from "@/components/Mode-toggle";
import { ReactNode } from "react";
import { AuthContextProvider } from "../app/context/AuthContext";
import Loader from "./animations/Loader";
import TopTag from "./components/TopTag";
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
              <div className=" m-5 p-2 z-40 bottom-0 right-0 fixed">
                <ModeToggle />
              </div>
              <Loader />
              <TopTag />
              {children}
            </main>
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}