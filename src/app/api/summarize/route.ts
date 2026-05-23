import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const MAX_CONTENT_LENGTH = 30000;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'GEMINI_API_KEY_MISSING' }, { status: 500 });
  }

  try {
    const { content, language } = await req.json();
    const truncated =
      content.length > MAX_CONTENT_LENGTH ? content.slice(0, MAX_CONTENT_LENGTH) + '...' : content;
    const lang = language === 'vi' ? 'Vietnamese' : language === 'zh' ? 'Chinese' : 'English';
    const prompt = `You are a research assistant. Provide a concise summary of the following research article in ${lang}.\nHighlight:\n1. Key Findings\n2. Methodologies used\n\nUse Markdown formatting.\n\nArticle Content:\n${truncated}`;

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({ model: 'gemini-2.0-flash', contents: prompt });
    return NextResponse.json({ summary: response.text });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}
