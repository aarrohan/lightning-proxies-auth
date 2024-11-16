import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lightning Proxies: Data Extraction Excellence at Scale",
  description:
    "Gather data efficiently with the industry-leading proxy network and enjoy limitless web scraping solutions on the most intense tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} antialiased`}>{children}</body>
    </html>
  );
}
