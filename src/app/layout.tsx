import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FakeFace",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://www.fakeface.com.br",
  description:
    "FakeFace oferece troca de rostos com IA, upload guiado e preview instantaneo direto no navegador.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  sameAs: ["https://www.fakeface.com.br"],
} as const;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fakeface.com.br"),
  title: "FakeFace",
  description:
    "FakeFace e uma ferramenta de face swap online com IA, upload guiado, preview instantaneo e download rapido das imagens geradas.",
  alternates: {
    canonical: "https://www.fakeface.com.br",
  },
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
