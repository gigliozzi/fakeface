"use client";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Contato</p>
          <h1 className="text-3xl font-semibold">Fale com o time FakeFace</h1>
          <p className="text-sm text-slate-300">
            Use os canais abaixo para enviar feedback, relatar bugs ou solicitar parcerias.
          </p>
        </header>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Canais oficiais</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-200">
            <li>
              E-mail: <a className="text-indigo-300 underline" href="mailto:contato@fakeface.com.br">contato@fakeface.com.br</a>
            </li>
            <li>
              Suporte técnico: <a className="text-indigo-300 underline" href="mailto:suporte@fakeface.com.br">suporte@fakeface.com.br</a>
            </li>
          </ul>
          <p className="text-sm text-slate-400">Respondemos em até 2 dias úteis.</p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Formulário rápido</h2>
          <form className="space-y-4">
            <label className="block text-sm text-slate-200">
              Nome
              <input className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900/50 p-3 text-white" type="text" name="nome" placeholder="Seu nome completo" />
            </label>
            <label className="block text-sm text-slate-200">
              E-mail
              <input className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900/50 p-3 text-white" type="email" name="email" placeholder="voce@exemplo.com" />
            </label>
            <label className="block text-sm text-slate-200">
              Mensagem
              <textarea className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900/50 p-3 text-white" rows={5} name="mensagem" placeholder="Conte como podemos ajudar"></textarea>
            </label>
            <button type="submit" className="rounded-2xl border border-indigo-500/40 bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-6 py-3 font-semibold text-white">
              Enviar mensagem
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
