"use client";

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl space-y-8 text-slate-200">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Política de privacidade</p>
          <h1 className="text-3xl font-semibold text-white">Compromisso com seus dados</h1>
          <p className="text-sm text-slate-300">Última atualização: 17 de novembro de 2025</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">1. Dados coletados</h2>
          <p>
            Coletamos apenas as imagens enviadas para o processamento e dados técnicos do navegador
            (IP, user-agent) para fins de segurança e monitoramento. Nenhuma imagem é armazenada após o
            término do processo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">2. Uso das informações</h2>
          <p>
            As imagens são encaminhadas exclusivamente ao modelo de IA responsável pela troca de rostos.
            Não utilizamos os arquivos para treinar modelos próprios ou compartilhá-los com terceiros.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">3. Cookies e análises</h2>
          <p>
            Utilizamos cookies essenciais para manter a sessão e ferramentas analíticas para entender
            o uso da plataforma. Você pode limpar cookies no navegador a qualquer momento.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">4. Direitos do titular</h2>
          <p>
            Você pode solicitar informações sobre seus dados ou revogar consentimentos enviando um e-mail
            para <a href="mailto:privacidade@fakeface.com.br" className="text-indigo-300 underline">privacidade@fakeface.com.br</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
