import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const summarizeArticle = async (content: string, language: string) => {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY_MISSING");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    You are a research assistant. Please provide a concise summary of the following research article.
    Highlight the:
    1. Key Findings
    2. Methodologies used
    
    The summary should be in ${language === 'vi' ? 'Vietnamese' : language === 'zh' ? 'Chinese' : 'English'}.
    Use Markdown formatting for the response.
    
    Article Content:
    ${content}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error summarizing article:", error);
    throw error;
  }
};
