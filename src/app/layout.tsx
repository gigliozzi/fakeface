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
      <body className={`${inter.className} bg-slate-950 text-white`}>
        <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 text-sm text-slate-100">
            <a href="/" className="font-semibold tracking-wide">FakeFace</a>
            <div className="flex flex-wrap gap-4">
              <a href="/#workflow" className="text-slate-300 hover:text-white">Passo a passo</a>
              <a href="/#beneficios" className="text-slate-300 hover:text-white">Benefícios</a>
              <a href="/sobre" className="text-slate-300 hover:text-white">Sobre</a>
              <a href="/contato" className="text-slate-300 hover:text-white">Contato</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-16 border-t border-white/10 bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-white">FakeFace Studio</p>
              <p className="text-xs text-slate-400">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-white" href="/sobre">Sobre</a>
              <a className="hover:text-white" href="/privacidade">Privacidade</a>
              <a className="hover:text-white" href="/termos">Termos</a>
              <a className="hover:text-white" href="/contato">Contato</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
