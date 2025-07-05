import type { Metadata } from "next";
import { VT323, EB_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ScrollProvider } from "@/context/ScrollContext";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import SVGFilters from "@/components/SVGFilters";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontHeading.variable} ${fontBody.variable} font-['var(--font-body)']`}>
        <ThemeProvider>
      <SVGFilters />
          <ScrollProvider>
            <CustomCursor />
            {children}
            <Navigation />
            <div className="noise-overlay"></div>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}