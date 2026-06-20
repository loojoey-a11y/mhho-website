import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "traditional medicine Malaysia",
    "holistic health Kuala Lumpur",
    "integrative medicine",
    "Traditional Chinese Medicine Malaysia",
    "Traditional Malay Medicine",
    "Ayurveda Malaysia",
    "herbal remedies",
    "MHHO",
    "Malaysian Herbs and Holistic Organisation",
    "complementary medicine KL",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/images/logo.png", width: 1200, height: 1200, alt: siteConfig.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#3d5a4c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
