import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CodeFest 2.0 | The Annual Flagship Fest of SSCBS",
    template: "%s | CodeFest 2.0",
  },

  description:
    "CodeFest 2.0 is a flagship technical fest featuring coding competitions, design challenges, workshops, and innovation-driven problem solving.",

  keywords: [
    "CodeFest",
    "CodeFest 2.0",
    "Hackathon India",
    "National Hackathon",
    "College Hackathon",
    "Coding Competition",
    "Web Development",
    "AI Hackathon",
    "UI UX Design Challenge",
    "Tech Fest",
    "Student Hackathon",
    "Programming Contest",
    "Offline Hackathon India",
    "Code Festival",
  ],


  metadataBase: new URL("https://codefest26.acmsscbs.in"),

  openGraph: {
    title: "CodeFest 2.0 | The Annual Flagship Fest of SSCBS",
    description:
      "Join CodeFest 2.0 – a flagship tech fest with exciting coding events, innovation challenges, and real-world problem solving.",
    url: "https://codefest26.acmsscbs.in",
    siteName: "CodeFest 2.0",
    images: [
      {
        url: "/LOGO2.png",
        width: 1200,
        height: 630,
        alt: "CodeFest 2.0",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeFest 2.0 | Flagship Tech Fest of SSCBS",
    description:
      "National-level hackathon & tech fest with coding competitions, design challenges, and innovation.",
    images: ["/LOGO2.png"],
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

  category: "technology",
  icons: {
    icon: "/LOGO2.png",
    apple: "/LOGO2.png",
  },
};

export const viewport = {
  themeColor: "#eab308", // yellow-500
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}