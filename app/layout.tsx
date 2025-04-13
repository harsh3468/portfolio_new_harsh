import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import ClientLayout from "./client-layout"; 

const circular = localFont({
  src: "../public/fonts/circular-std.ttf",
  variable: "--font-circular",
});

const markPro = localFont({
  src: [
    {
      path: "../public/fonts/mark-pro.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/mark-pro-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-markpro",
});

const condensed = localFont({
  src: [
    {
      path: "../public/fonts/condensed.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/condensed-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-condensed",
});

export const metadata: Metadata = {
  title: "Harsh  | Backend Developer",
  description: "I am Harsh, a software development engineer (backend heavy), with expertise in building large scale, distributed, dynamic, and robust solutions, transforming ideas into highly sustainable and profit generating products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-black text-white",
          circular.className,
          markPro.variable,
          condensed.variable
        )}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
