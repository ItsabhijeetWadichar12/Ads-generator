import { GENERATE_SCRIPT_PROMPT } from "@/services/Prompt";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});
export async function POST(req) {
  try {
    const { topic, lang } = await req.json();
    const PROMPT = GENERATE_SCRIPT_PROMPT
      .replace('{topic}', topic)
      .replace('{language}', lang || 'HINDI');

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        { role: "user", content: PROMPT }
      ],
    });

    const content = completion.choices[0].message?.content;

    // Try to parse the content as JSON before sending
    try {
      const parsedContent = JSON.parse(content);
      return NextResponse.json(parsedContent);
    } catch {
      // If parsing fails, return the raw content
      return NextResponse.json({ content });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}