import type { Metadata, Viewport } from "next";
import { Urbanist, IBM_Plex_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#07070b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// English typeface (body + display).
const urbanist = Urbanist({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

// Arabic typeface — applied when the active locale is Arabic (Urbanist has no
// Arabic glyphs).
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
    title: "Bishoy R Mansour - Lead Frontend Developer & UI/UX Designer",
    description:
      "Experienced frontend developer and UI/UX designer with 9+ years of expertise. Specializing in React, Next.js, TypeScript, and building enterprise-grade web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishoy R Mansour - Lead Frontend Developer & UI/UX Designer",
    description:
      "9+ years expertise in React, Next.js, TypeScript. Building scalable, accessible web applications.",
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
  alternates: {
    canonical: "/",
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
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body
        className={`${urbanist.variable} ${ibmPlexArabic.variable} antialiased w-full`}
      >
        <StructuredData />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
