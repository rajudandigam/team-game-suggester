import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export async function getGameSuggestion(players, mode, time, location) {
  const prompt = `Suggest a fun ${mode} game for ${players} people that lasts around ${time} minutes and is suitable for ${location}.`;
  
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 100,
  });

  return response.data.choices[0].text.trim();
}