"use client";

import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Sobre nós</p>
          <h1 className="text-3xl font-semibold">Como nasceu o FakeFace</h1>
          <p className="text-sm text-slate-300">
            FakeFace surgiu como um laboratório interno para testar modelos de troca de rosto e acabou
            evoluindo para um painel acessível para criadores, agências e entusiastas de IA.
          </p>
        </header>

        <section className="space-y-4 text-slate-200">
          <h2 className="text-2xl font-semibold text-white">Nossa missão</h2>
          <p>
            Democratizar experimentos com inteligência artificial, oferecendo um fluxo transparente,
            seguro e guiado. Acreditamos que ferramentas de IA precisam ser acessíveis e claras sobre
            como tratam os dados dos usuários.
          </p>
          <p>
            Por isso focamos em um painel que simplifica uploads, destaca o preview antes do download
            e mantém o controle das imagens com você.
          </p>
        </section>

        <section className="space-y-4 text-slate-200">
          <h2 className="text-2xl font-semibold text-white">Como o time opera</h2>
          <p>
            Somos um grupo pequeno de designers, desenvolvedores e pesquisadores independentes.
            Trabalhamos com modelos públicos (como os hospedados no Hugging Face) e monitoramos
            continuamente sua performance, garantindo que qualquer instabilidade seja comunicada
            rapidamente.
          </p>
          <p>
            Cada melhoria do painel vem de feedback direto dos usuários. Gostaríamos muito de saber
            como você está usando o FakeFace. Fale com a gente em nossa página de contato.
          </p>
        </section>

        <footer className="rounded-3xl border border-white/15 bg-white/5 p-6 text-sm text-slate-200">
          <p>
            Quer falar com o time? Use a <Link href="/contato" className="text-indigo-300 underline">página de contato</Link> ou envie um
            e-mail para <a className="text-indigo-300 underline" href="mailto:contato@fakeface.com.br">contato@fakeface.com.br</a>.
          </p>
        </footer>
      </div>
    </main>
  );
}
