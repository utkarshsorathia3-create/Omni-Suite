import type { Metadata } from "next";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://omnisuite.online'),
  title: {
    default: "OmniSuite | 20+ Free Developer & Designer Tools ⚡ Privacy-First",
    template: "%s | OmniSuite"
  },
  description: "🚀 Free, fast, and private. 20+ premium browser-based tools for developers and designers. JSON formatter, code to image, SEO tools & more. No signup required!",
  keywords: [
    "free developer tools", 
    "online utilities", 
    "json formatter", 
    "code to image", 
    "seo meta tags", 
    "productivity tools",
    "browser-based tools",
    "privacy-first tools",
    "web developer utilities"
  ],
  authors: [{ name: "OmniSuite Team" }],
  openGraph: {
    title: "OmniSuite | 20+ Free Developer Tools ⚡",
    description: "Premium browser-based utilities. JSON formatter, code beautifier, SEO tools & more. 100% free, private, and lightning-fast.",
    url: "https://omnisuite.online",
    siteName: "OmniSuite",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniSuite | Free Developer & Designer Toolkit",
    description: "20+ premium tools. No signup. No tracking. Just pure productivity. ⚡",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-wrapper" style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <Suspense fallback={<div style={{ width: 'var(--sidebar-width)', background: 'var(--bg-dark)' }} />}>
            <Sidebar />
            <GoogleAnalytics />
          </Suspense>
          <main className="workspace" style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
            <div className="glow-background" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% -20%, var(--accent-primary) 0%, transparent 60%)',
              opacity: 0.1,
              pointerEvents: 'none',
              zIndex: 0
            }} />
            <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                {children}
              </div>
              <Footer />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
