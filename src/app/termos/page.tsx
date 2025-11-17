"use client";

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl space-y-8 text-slate-200">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Termos de uso</p>
          <h1 className="text-3xl font-semibold text-white">Condições para utilizar o FakeFace</h1>
          <p className="text-sm text-slate-300">Última atualização: 17 de novembro de 2025</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">1. Aceitação</h2>
          <p>
            Ao usar o FakeFace, você concorda com estes termos e declara ter direitos sobre as imagens
            enviadas. O serviço não deve ser usado para fins ilegais ou para violar a privacidade de terceiros.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">2. Limitações</h2>
          <p>
            O FakeFace não oferece garantias de disponibilidade ou resultado perfeito em todas as combinações
            de imagens. Podemos suspender o acesso em caso de uso abusivo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">3. Responsabilidade</h2>
          <p>
            Você é o único responsável pelo uso das imagens geradas. O FakeFace não se responsabiliza por uso
            indevido ou por qualquer dano causado pela redistribuição do conteúdo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">4. Alterações</h2>
          <p>
            Podemos ajustar estes termos a qualquer momento. Manteremos a data da última atualização visível
            e incentivamos que você revise este documento periodicamente.
          </p>
        </section>
      </div>
    </main>
  );
}
