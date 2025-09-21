import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Free Fortnite Skins!",
  description:
    "Click here to get genuine Fortnite skins for absolutely FREE! (not clickbait)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fortnite/Fortnite_F_lettermark_logo.png" />
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
