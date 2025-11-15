"use client";

import { useState } from "react";

export default function Home() {
  const [original, setOriginal] = useState<File | null>(null);
  const [target, setTarget] = useState<File | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSwap = async () => {
    if (!original || !target) return;
    setLoading(true);
    setResultUrl(null);

    try {
      const formData = new FormData();
      formData.append("original", original);
      formData.append("target", target);

      const res = await fetch("/api/face-swap", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setResultUrl(data.url);
      } else {
        alert("Erro: " + data.error || "Erro desconhecido");
      }
    } catch (err: any) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : JSON.stringify(err);
    
      console.error("Erro inesperado:", err);
      alert("Erro inesperado: " + message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Fake Face 🤓
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-5xl">
        {/* Upload Original */}
        <UploadBox
          label="Rosto original"
          file={original}
          onFileChange={(f) => setOriginal(f)}
        />

        {/* Upload Target */}
        <UploadBox
          label="Imagem que receberá o rosto"
          file={target}
          onFileChange={(f) => setTarget(f)}
        />

        {/* Resultado */}
        <div className="border-2 border-dashed border-gray-300 rounded-md h-72 flex items-center justify-center bg-white shadow-sm text-gray-400 text-sm">
          {loading ? (
            <span className="animate-pulse">Processando...</span>
          ) : resultUrl ? (
            <div className="flex flex-col items-center">
  <img
    src={resultUrl}
    alt="Resultado da troca de rosto"
    onError={() => alert("Falha ao carregar imagem gerada")}
    className="object-contain max-h-56 rounded mb-2"
  />
  <button
    onClick={async () => {
      if (!resultUrl) return;
      const res = await fetch(resultUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "face-swap-result.webp";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }}
    className="text-sm text-indigo-600 hover:underline"
  >
    ⬇️ Baixar imagem
  </button>
</div>
          ) : (
            "Resultado aqui"
          )}
        </div>
      </div>

      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-md transition disabled:opacity-50"
        disabled={!original || !target || loading}
        onClick={handleSwap}
      >
        {loading ? "Enviando..." : "Aplicar"}
      </button>
    </main>
  );
}

// Componente reutilizável para upload
function UploadBox({
  label,
  file,
  onFileChange,
}: {
  label: string;
  file: File | null;
  onFileChange: (file: File | null) => void;
}) {
  return (
    <label className="border-2 border-dashed border-gray-300 rounded-md h-72 flex flex-col items-center justify-center text-gray-500 cursor-pointer bg-white hover:border-indigo-400 hover:shadow-md transition group relative overflow-hidden">
      <span className="text-sm">{label}</span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onFileChange(e.target.files?.[0] || null)}
      />
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="preview"
          className="absolute inset-0 object-contain w-full h-full p-2"
        />
      )}
    </label>
  );
}
