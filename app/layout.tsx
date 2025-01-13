import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { inter } from "@/ui/fonts";

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
        <header>
          This is header <Link href="/comps">Components</Link> | <Link href="/">Home</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
