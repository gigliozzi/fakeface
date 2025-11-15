// src/lib/faceSwap.ts
import { Client } from "@gradio/client";

export async function faceSwap(original: File, target: File): Promise<string> {
  try {
    const client = await Client.connect("WilliamSG/face-swap");

    const result = await client.predict("/predict", {
      sourceImage: original,
      sourceFaceIndex: 1,
      destinationImage: target,
      destinationFaceIndex: 1,
    });

    const output = result.data as {
      url?: string;
      path?: string;
      [key: string]: unknown;
    }[];

    const url = output?.[0]?.url;

    if (!url || typeof url !== "string") {
      throw new Error("URL de resultado não encontrada");
    }

    return url;
  } catch (err) {
    console.error("Erro ao processar face swap:", err);
    throw new Error("Erro ao processar imagens na IA");
  }
}
