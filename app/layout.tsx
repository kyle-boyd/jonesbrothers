import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo.svg",
  },
  title: "Jones Brothers Junk Removal - Lancaster Junk Removal You Can Trust",
  description: "At Jones Brothers Junk Removal, we make sure that you receive great service at affordable prices. Top-quality junk hauling and clean outs in Lancaster.",
  keywords: "junk removal, Lancaster, hauling, clean outs, yard debris, furniture removal",
  authors: [{ name: "Jones Brothers Junk Removal" }],
  openGraph: {
    title: "Jones Brothers Junk Removal - Lancaster Junk Removal You Can Trust",
    description: "Lancaster junk removal you can trust! Great service at affordable prices. Top-quality junk hauling and clean outs.",
    type: "website",
    locale: "en_US",
    url: "https://www.jonesbrosjunk.com",
    siteName: "Jones Brothers Junk Removal",
    images: [
      {
        url: "https://www.jonesbrosjunk.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jones Brothers Junk Removal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jones Brothers Junk Removal",
    description: "Lancaster junk removal you can trust! Great service at affordable prices.",
    images: ["https://www.jonesbrosjunk.com/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900 antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
