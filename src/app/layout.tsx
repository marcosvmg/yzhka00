import type { Metadata } from "next";
import { VT323, EB_Garamond } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import { ThemeProvider } from "@/context/ThemeContext";
import { ScrollProvider } from "@/context/ScrollContext";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import SVGFilters from "@/components/SVGFilters";
import Header from "@/components/Header";

const fontHeading = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});
const fontBody = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "#YZHKA00",
  description: "Um movimento de música experimental.",
    icons: {
    icon: '/favicon.png', // ou .ico se for o caso
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={`${fontHeading.variable} ${fontBody.variable} font-['var(--font-body)']`}>
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <ThemeProvider>
      <SVGFilters />
          <ScrollProvider>
            <CustomCursor />
            <Header />
            {children}
            <Navigation />
            <div className="noise-overlay"></div>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}