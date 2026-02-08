import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CodeFest 2.0 | National Hackathon & Tech Fest",
    template: "%s | CodeFest 2.0",
  },

  description:
    "CodeFest 2.0 is a national-level hackathon and technical fest featuring coding competitions, design challenges, workshops, and innovation-driven problem solving.",

  keywords: [
    "CodeFest",
    "CodeFest 2.0",
    "Hackathon India",
    "National Hackathon",
    "College Hackathon",
    "Coding Competition",
    "Web Development",
    "SSCBS",
    "Shaheed Sukhdev College Of Business Studies",
    "SIIF",
    "AI Hackathon",
    "UI UX Design Challenge",
    "Tech Fest",
    "Student Hackathon",
    "Programming Contest",
    "Offline Hackathon India",
    "Code Festival",
  ],

  authors: [
    {
      name: "Eklavya Popli",
      url: "https://eklavyapopli.humkind.in",
    },
  ],

  creator: "Eklavya Popli",
  publisher: "CodeFest 2.0",

  metadataBase: new URL("https://codefest.acmsscbs.in"), // change if domain differs

  openGraph: {
    title: "CodeFest 2.0 | National Hackathon & Tech Fest",
    description:
      "Join CodeFest 2.0 – a national-level hackathon with exciting coding events, innovation challenges, and real-world problem solving.",
    url: "https://codefest.acmsscbs.in",
    siteName: "CodeFest 2.0",
    images: [
      {
        url: "/LOGO.png", // add later
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
    title: "CodeFest 2.0 | National Hackathon & Tech Fest",
    description:
      "National-level hackathon & tech fest with coding competitions, design challenges, and innovation.",
    images: ["/LOGO.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
