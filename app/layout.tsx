import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beshoyrmansour.com"),
  title: {
    default: "Bishoy R Mansour - Lead Frontend Developer & UI/UX Designer",
    template: "%s | Bishoy R Mansour",
  },
  description:
    "Experienced frontend developer and UI/UX designer with 9+ years of expertise in React, Next.js, TypeScript, and modern web technologies. Building scalable, accessible, and performant web applications.",
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Bishoy Mansour",
    "Beshoy Mansour",
    "Cairo Frontend Developer",
    "Egypt Web Developer",
  ],
  authors: [{ name: "Bishoy R Mansour", url: "https://beshoyrmansour.com" }],
  creator: "Bishoy R Mansour",
  publisher: "Bishoy R Mansour",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#3B82F6" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: "https://beshoyrmansour.com",
    siteName: "Bishoy R Mansour Portfolio",
    title: "Bishoy R Mansour - Lead Frontend Developer & UI/UX Designer",
    description:
      "Experienced frontend developer and UI/UX designer with 9+ years of expertise. Specializing in React, Next.js, TypeScript, and building enterprise-grade web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bishoy R Mansour - Lead Frontend Developer & UI/UX Designer",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Bishoy R Mansour Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishoy R Mansour - Lead Frontend Developer & UI/UX Designer",
    description:
      "9+ years expertise in React, Next.js, TypeScript. Building scalable, accessible web applications.",
    images: ["/og-image.png"],
    creator: "@beshoyrmansour",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://beshoyrmansour.com",
    languages: {
      en: "https://beshoyrmansour.com",
      ar: "https://beshoyrmansour.com/ar",
    },
  },
  category: "technology",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the locale from next-intl
  const locale = await getLocale();

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${poppins.variable} antialiased w-full`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <a href="#main-content" className="skip-to-main">
              Skip to main content
            </a>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
