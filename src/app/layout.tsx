import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "NSB TECH | Innovative Website Development For Your Business",
  description:
    "Crafting dynamic, responsive, and user-focused digital solutions that help businesses grow online.",
  keywords: [
    "web development",
    "website design",
    "e-commerce solutions",
    "UI/UX design",
    "SEO services",
    "digital marketing",
    "software development",
    "NSB TECH",
  ],
  authors: [{ name: "NSB TECH" }],
  creator: "NSB TECH",
  metadataBase: new URL("https://nsbtech.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nsbtech.com",
    siteName: "NSB TECH",
    title: "NSB TECH | Innovative Website Development For Your Business",
    description:
      "Crafting dynamic, responsive, and user-focused digital solutions that help businesses grow online.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NSB TECH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NSB TECH | Innovative Website Development For Your Business",
    description:
      "Crafting dynamic, responsive, and user-focused digital solutions that help businesses grow online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
