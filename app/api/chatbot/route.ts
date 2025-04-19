import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ambil dari .env.local
});

export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const reply = chatCompletion.choices[0].message?.content || "Maaf, tidak ada jawaban.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ reply: "Terjadi kesalahan saat menghubungi OpenAI." }, { status: 500 });
  }
}
