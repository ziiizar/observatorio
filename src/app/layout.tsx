import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { outfit } from "@/styles/fonts";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Observatorio MINEM",
  description: "Observatorio tecnologico del MINEM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn( 'antialiased bg-white text-black min-h-screen w-full', outfit.className)}
      >
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  );
}
