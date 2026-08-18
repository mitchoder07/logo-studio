import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/portfolio/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://logostudi0.vercel.app";

export const metadata: Metadata = {
  title: "Your Studio — Logo Portfolio",
  description:
    "A logo portfolio of brand marks across 13 industries and 8 design styles. Browse the gallery, filter by industry or style, and inspect each logo's palette, brief, and concept notes.",
  keywords: [
    "logo portfolio",
    "logo design",
    "branding",
    "brand identity",
    "design studio",
    "brand marks",
  ],
  authors: [{ name: "Your Studio" }],
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Your Studio — Logo Portfolio",
    description:
      "80 brand marks across 13 industries and 8 design styles. Filter, search, and inspect each logo's palette, brief, and concept notes.",
    siteName: "Your Studio",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        secureUrl: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Your Studio — Logo Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Studio — Logo Portfolio",
    description:
      "80 brand marks across 13 industries and 8 design styles. Filter, search, and inspect each logo's palette, brief, and concept notes.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
