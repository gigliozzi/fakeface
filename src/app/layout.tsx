import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fakeface.com.br"),
  title: "FakeFace",
  description:
    "FakeFace e um estudio de face swap alimentado por IA com upload guiado e preview instantaneo.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "FakeFace — Troque rostos com IA",
    description:
      "Envie duas imagens, visualize o resultado em segundos e faça o download em alta qualidade.",
    url: "https://www.fakeface.com.br",
    siteName: "FakeFace",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Interface do FakeFace Studio com painéis de upload e preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FakeFace — Troque rostos com IA",
    description:
      "Uploads guiados, preview instantaneo e downloads em um painel inspirado em ferramentas profissionais.",
    images: ["/og-cover.png"],
  },
  other: {
    "fb:app_id": "1522561275635459",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9724425381463085"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
