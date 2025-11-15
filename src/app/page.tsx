"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroStats = [
  {
    value: "2 imagens",
    label: "é tudo o que você precisa",
    detail: "Rosto de origem + destino",
  },
  {
    value: "< 30s",
    label: "tempo médio de geração",
    detail: "Processamento assistido por IA",
  },
  {
    value: "Alta fidelidade",
    label: "fusão preservando iluminação",
    detail: "Modelo WilliamSG/face-swap",
  },
];

const highlights = [
  {
    title: "Upload guiado",
    description:
      "Estados visuais indicam quando cada foto está pronta para o processamento, reduzindo erros.",
  },
  {
    title: "Preview elegante",
    description:
      "O resultado ganha destaque com moldura em vidro fosco e opção de download sem sair da página.",
  },
  {
    title: "Narrativa clara",
    description:
      "Badges, passos e microcopy em português deixam o fluxo intuitivo para novos usuários.",
  },
];

const steps = [
  {
    title: "1. Faça o upload",
    detail: "Selecione o rosto original e a foto alvo. PNG, JPG ou WEBP funcionam bem.",
  },
  {
    title: "2. Aperte Aplicar",
    detail: "Nós enviamos o par para a IA, que identifica os rostos e faz a substituição.",
  },
  {
    title: "3. Revise e baixe",
    detail: "Visualize o resultado em alta e exporte em um clique para compartilhar.",
  },
];

export default function Home() {
  const [original, setOriginal] = useState<File | null>(null);
  const [target, setTarget] = useState<File | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSwap = async () => {
    if (!original || !target) {
      setError("Envie o rosto original e a imagem destino para continuar.");
      return;
    }

    setLoading(true);
    setResultUrl(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("original", original);
      formData.append("target", target);

      const res = await fetch("/api/face-swap", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data?.url) {
        setResultUrl(data.url);
      } else {
        throw new Error(data?.error || "Não conseguimos gerar a imagem agora.");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : JSON.stringify(err);

      console.error("Erro no face swap:", err);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!resultUrl) return;

    setDownloading(true);
    setError(null);

    try {
      const res = await fetch(resultUrl);
      if (!res.ok) {
        throw new Error("Falha ao baixar o arquivo.");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "fakeface-result.webp";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : JSON.stringify(err);
      setError(message);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <BackgroundGradients />
      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              FakeFace 3.0
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Troque rostos com visual cinematográfico
              </h1>
              <p className="max-w-2xl text-lg text-slate-200">
                O FakeFace Studio ganhou um painel com efeito vidro, destaques informativos e
                feedback instantâneo. Faça upload, acompanhe o progresso e baixe o resultado com
                o mesmo clima de uma ferramenta profissional.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-indigo-200">{stat.label}</p>
                  <p className="text-xs text-slate-300/80">{stat.detail}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-indigo-900/30 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">Passo a passo</p>
              <ul className="mt-4 space-y-4">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-3 text-sm text-slate-100">
                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-indigo-200">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-white">{step.title}</p>
                      <p className="text-slate-300/90">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/15 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,118,255,0.2)] backdrop-blur-2xl">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Workspace</p>
                <p className="font-semibold text-white">FakeFace Playground</p>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200">
                Online
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <UploadCard
                label="Rosto original"
                description="Selecione quem terá o rosto copiado"
                file={original}
                onFileChange={setOriginal}
              />
              <UploadCard
                label="Imagem destino"
                description="Foto que vai receber o novo rosto"
                file={target}
                onFileChange={setTarget}
              />
            </div>

            <ResultPanel
              loading={loading}
              resultUrl={resultUrl}
              onDownload={handleDownload}
              downloading={downloading}
            />

            {error && (
              <p className="mt-4 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm text-rose-100">
                {error}
              </p>
            )}

            <button
              className="mt-6 w-full rounded-2xl border border-indigo-500/40 bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-6 py-4 text-base font-semibold text-white transition hover:shadow-lg hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10"
              disabled={!original || !target || loading}
              onClick={handleSwap}
            >
              {loading ? "Processando com IA..." : "Aplicar face swap"}
            </button>

            <p className="mt-3 text-center text-xs text-slate-300/80">
              As imagens são transferidas via HTTPS e descartadas após o processamento.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mb-8 flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">Detalhes do redesign</p>
            <h2 className="text-2xl font-semibold text-white">O que mudou nesta versão</h2>
            <p className="text-sm text-slate-300">
              As melhorias deixam claro cada passo do fluxo, entregam foco ao preview e criam um
              storytelling visual coerente com ferramentas modernas de IA.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 shadow-inner shadow-black/20"
              >
                <div className="mb-4 h-10 w-10 rounded-2xl bg-indigo-500/40 text-center text-2xl leading-10 text-white">
                  ✦
                </div>
                <p className="font-semibold text-white">{feature.title}</p>
                <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function useObjectURL(file: File | null) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return preview;
}

type UploadCardProps = {
  label: string;
  description: string;
  file: File | null;
  onFileChange: (file: File | null) => void;
};

function UploadCard({ label, description, file, onFileChange }: UploadCardProps) {
  const previewUrl = useObjectURL(file);

  return (
    <label className="group relative flex min-h-[220px] cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 transition hover:border-indigo-400/50 hover:bg-indigo-400/10">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => onFileChange(event.target.files?.[0] || null)}
      />

      <div>
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="text-xs text-slate-300">{description}</p>
      </div>

      <div className="relative mt-4 h-40 overflow-hidden rounded-2xl border border-dashed border-white/15 bg-slate-900/40">
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt={`Preview de ${label}`}
            fill
            unoptimized
            sizes="(max-width: 768px) 80vw, 33vw"
            className="object-contain p-4"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center text-xs text-slate-400">
            <span className="text-2xl">+</span>
            <p>Arraste ou clique para enviar</p>
          </div>
        )}
      </div>
    </label>
  );
}

type ResultPanelProps = {
  loading: boolean;
  resultUrl: string | null;
  downloading: boolean;
  onDownload: () => void;
};

function ResultPanel({ loading, resultUrl, onDownload, downloading }: ResultPanelProps) {
  return (
    <div className="mt-6 rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-900/60 p-4">
      <div className="flex items-center justify-between text-sm text-slate-200">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Preview</p>
          <p className="font-medium text-white">Resultado em tempo real</p>
        </div>
        {resultUrl && (
          <button
            onClick={onDownload}
            disabled={downloading}
            className="rounded-full border border-white/20 px-4 py-1 text-xs font-medium text-white transition hover:border-white/60 disabled:opacity-60"
          >
            {downloading ? "Preparando..." : "Baixar"}
          </button>
        )}
      </div>
      <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
        {loading ? (
          <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 text-sm text-indigo-200">
            <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-white/70" />
            <p>Processando com IA...</p>
          </div>
        ) : resultUrl ? (
          <div className="relative h-[260px] w-full overflow-hidden">
            <Image
              src={resultUrl}
              alt="Resultado da troca de rosto"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain p-4"
            />
          </div>
        ) : (
          <div className="flex min-h-[220px] items-center justify-center text-sm text-slate-400">
            O resultado aparecerá aqui
          </div>
        )}
      </div>
    </div>
  );
}

function BackgroundGradients() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.4),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.2),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-y-20 inset-x-10 rounded-[60px] border border-white/5" />
    </>
  );
}
