import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Constant - Full Stack Developer",
  description:
    "Desenvolvedor Full Stack especializado em TypeScript, Next.js, React e Node.js. Criando soluções digitais para o dia a dia convencional e empresarial.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Web Development",
  ],
  authors: [{ name: "João Pedro Constant" }],
  openGraph: {
    title: "Constant - Full Stack Developer",
    description:
      "Desenvolvedor Full Stack especializado em TypeScript, Next.js, React e Node.js.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a2744",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
