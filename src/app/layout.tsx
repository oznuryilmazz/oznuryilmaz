import type { Metadata } from "next";
import { Fira_Code, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Öznur Yılmaz | Full-Stack Developer",
  description:
    "Full-Stack Developer passionate about building scalable web applications and innovative solutions. Specialized in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Öznur Yılmaz",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Turkey",
  ],
  authors: [{ name: "Öznur Yılmaz", url: "https://www.linkedin.com/in/oznuryilmazz/" }],
  openGraph: {
    title: "Öznur Yılmaz | Full-Stack Developer",
    description: "Full-Stack Developer passionate about building scalable web applications and innovative solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Öznur Yılmaz | Full-Stack Developer",
    description: "Full-Stack Developer passionate about building scalable web applications and innovative solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.variable} ${openSans.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
