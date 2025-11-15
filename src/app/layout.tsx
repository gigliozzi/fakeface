import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FakeFace",
  description:
    "FakeFace e um estudio de face swap alimentado por IA com upload guiado e preview instantaneo.",
  icons: {
    icon: "/fakeface-favicon.svg",
    shortcut: "/fakeface-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
