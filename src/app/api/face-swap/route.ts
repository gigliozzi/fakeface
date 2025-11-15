import { NextRequest, NextResponse } from "next/server";
import { Client } from "@gradio/client";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const original = formData.get("original") as File;
    const target = formData.get("target") as File;

    const client = await Client.connect("WilliamSG/face-swap");

    const result = await client.predict("/predict", {
      sourceImage: original,
      sourceFaceIndex: 1,
      destinationImage: target,
      destinationFaceIndex: 1,
    });

    const output = result.data as any;
    const url = output?.[0]?.url;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Erro ao obter a URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Erro no face-swap API:", error);
    return NextResponse.json(
      { error: "Erro ao processar imagens" },
      { status: 500 }
    );
  }
}
