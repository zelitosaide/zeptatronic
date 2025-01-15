import type { Metadata } from "next";
import { inter } from "@/ui/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "ZEPTATRONIC",
  description: "All components you need for your project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
