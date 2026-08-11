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
  openGraph: {
    title: "Your Studio — Logo Portfolio",
    description:
      "A logo portfolio of brand marks across 13 industries and 8 design styles.",
    siteName: "Your Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Studio — Logo Portfolio",
    description:
      "A logo portfolio of brand marks across 13 industries and 8 design styles.",
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
