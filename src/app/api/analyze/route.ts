import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: NextRequest) {
  try {
    const { apiKey, prompt } = await req.json();
    if (!apiKey) {
      return NextResponse.json({ error: 'API_KEY_MISSING' }, { status: 400 });
    }
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({ model: 'gemini-2.0-flash', contents: prompt });
    return NextResponse.json({ result: response.text });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}
