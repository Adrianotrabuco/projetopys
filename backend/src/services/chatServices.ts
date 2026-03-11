import axios from "axios";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// Função enviar para o modelo Groq
export const getAIResponse = async (
  systemPrompt: string,
  userMessage: string,
) => {
  const response = await axios.post(
    GROQ_API_URL,
    {
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.data.choices[0].message.content;
};
