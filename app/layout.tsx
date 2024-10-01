import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "V0 Chat",
  description: "V0 Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
