import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import {
  hasProductionSiteUrl,
  profileData,
  seoDescription,
  seoSummary,
  siteName,
  siteUrl
} from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(hasProductionSiteUrl ? siteUrl : "http://localhost:3000"),
  title: {
    default: `${profileData.person.name} | ${profileData.person.title}`,
    template: `%s | ${profileData.person.name}`
  },
  description: seoDescription,
  applicationName: `${siteName} Career Site`,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },
  authors: [{ name: profileData.person.name }],
  creator: profileData.person.name,
  publisher: profileData.person.name,
  category: "technology",
  alternates: hasProductionSiteUrl
    ? {
        canonical: "/"
      }
    : undefined,
  robots: hasProductionSiteUrl
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1
        }
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false
        }
      },
  keywords: [
    "Safei Ashraf",
    "Senior Frontend Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "storefront",
    "discovery",
    "commerce",
    "resume",
    "selected impact"
  ],
  openGraph: {
    title: `${profileData.person.name} | ${profileData.person.title}`,
    description: seoSummary,
    url: hasProductionSiteUrl ? siteUrl : undefined,
    siteName: `${siteName} Career Site`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.person.name} | ${profileData.person.title}`,
    description: seoSummary,
    images: [
      {
        url: "/twitter-image"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#101113"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
