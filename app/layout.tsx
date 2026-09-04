import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/content";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kritr.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Kritr"
  },
  description: siteConfig.description,
  applicationName: "Kritr",
  keywords: [
    "Kritr",
    "AI product company",
    "MyLabStory",
    "lab data",
    "health intelligence"
  ],
  openGraph: {
    type: "website",
    siteName: "Kritr",
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    images: [
      {
        url: "/og-kritr.jpg",
        width: 1200,
        height: 630,
        alt: "Kritr logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-kritr.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
