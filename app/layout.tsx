import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0f",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Arnav Sharma — Data Science & AI/ML Engineer",
  description:
    "Portfolio of Arnav Sharma — incoming Data Analyst @ Deloitte USI and Graduate of Manipal University Jaipur. Published GPU-computing researcher on IEEE Xplore.",
  keywords: [
    "Arnav Sharma",
    "Data Science",
    "AI/ML Engineer",
    "Machine Learning",
    "NLP",
    "RAG",
    "GPU Computing",
    "CUDA",
    "Deloitte",
    "IEEE Xplore",
    "Portfolio",
  ],
  authors: [{ name: "Arnav Sharma" }],
  creator: "Arnav Sharma",
  metadataBase: new URL("https://arnavsharma.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Arnav Sharma — Data Science & AI/ML Engineer",
    description:
      "RAG systems, NLP, GPU computing. Deloitte PPO. Published IEEE researcher.",
    siteName: "Arnav Sharma",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arnav Sharma — Data Science & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Sharma — Data Science & AI/ML Engineer",
    description:
      "RAG systems, NLP, GPU computing. Deloitte PPO. Published IEEE researcher.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
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

import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${newsreader.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
