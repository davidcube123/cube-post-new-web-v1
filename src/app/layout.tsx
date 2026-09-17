import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./editorial.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";


// Optimized font loading
const inter = localFont({
 src: "../../public/fonts/manrope-latin.woff2",
 display: "swap",
 variable: "--font-inter",
 weight: "200 800",
});

export const metadata: Metadata = {
  title: {
    default: "Cube Post | Postproduccion de imagen en Barcelona",
    template: "%s | Cube Post",
  },
  description:
    "Somos una empresa de postproduccion de imagen en Barcelona que ofrece servicios de diseno de workflow, backup de rodaje, ciencia de color, calibracion, conformado online, grading para cine en HDR y SDR, grading remoto, mastering y deliveries.",
  keywords: [
    "postproduccion",
    "cine",
    "Barcelona",
    "color grading",
    "HDR",
    "SDR",
    "DCP",
    "mastering",
    "conformado online",
    "colorista",
    "etalonaje",
    "workflow",
    "LUT",
    "Dolby Vision",
    "IMF",
  ],
  authors: [{ name: "Cube Post" }],
  creator: "Cube Post",
  publisher: "Cube Post",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cube-post.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://cube-post.com",
    siteName: "Cube Post",
    title: "Cube Post | Postproduccion de imagen en Barcelona",
    description:
      "Empresa de postproduccion de imagen en Barcelona. Color grading, conformado online, mastering DCP, Dolby Vision y mas.",
    images: [
      {
        url: "/espacios/Grading_1.jpg",
        width: 1568,
        height: 882,
        alt: "Cube Post - Postproduccion de imagen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cube Post | Postproduccion de imagen en Barcelona",
    description:
      "Empresa de postproduccion de imagen en Barcelona. Color grading, conformado online, mastering DCP, Dolby Vision y mas.",
    images: ["/espacios/Grading_1.jpg"],
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
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5, viewportFit: "cover", themeColor: "#111317" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/cube-logo-original.jpg" />
        {/* Mobile optimizations */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Cube Post" />
        <meta name="format-detection" content="telephone=no" />
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />

      </head>
      <body className="min-h-screen bg-background antialiased">
        <LanguageProvider>
          <Header />
          <main id="contenido" className="site-main">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
