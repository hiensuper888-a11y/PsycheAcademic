export const summarizeArticle = async (content: string, language: string) => {
  const res = await fetch('/api/summarize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, language }),
  });
  const data = await res.json();
  if (data.error === 'GEMINI_API_KEY_MISSING') throw new Error('GEMINI_API_KEY_MISSING');
  if (!res.ok) throw new Error(data.error || 'Failed to summarize');
  return data.summary;
};
