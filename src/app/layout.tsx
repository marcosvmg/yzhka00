import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      {/* Definimos o fundo como preto e a cor do texto padrão como um cinza claro */}
      <body className={`${inter.className} bg-black text-gray-300`}>
        {children}

        {/* Camada de Ruído: fixa sobre todo o conteúdo */}
        <div className="noise-overlay fixed top-0 left-0 w-full h-full pointer-events-none z-[999] overflow-hidden"></div>
      </body>
    </html>
  );
}