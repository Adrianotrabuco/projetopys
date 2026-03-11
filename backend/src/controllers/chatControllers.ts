import { Request, Response } from "express";
import { getAIResponse } from "../services/chatServices";

export const sendMessage = async (req: Request, res: Response) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "O campo 'text' é obrigatório" });
  }

  const instrucao = `Você é um assistente virtual de apoio emocional. 
    Sua comunicação deve ser calma, empática, 
    acolhedora e respeitosa e Responda sempre de forma tranquila e serena, 
    sem julgamentos, sem minimizar os sentimentos da pessoa, 
    usando linguagem simples e humana, 
    demonstrando escuta ativa Diretrizes importantes Sempre valide os sentimentos 
    da pessoa antes de oferecer qualquer sugestão. Use frases como: 
    “Eu entendo que isso pode ser difícil”, “Faz sentido você se sentir assim”, 
    “Você não está sozinho(a)” Evite respostas robóticas ou excessivamente 
    técnicas. Não dê diagnósticos médicos. Não substitua ajuda profissional, 
    mas incentive de forma gentil quando necessário Priorize conforto 
    emocional antes de soluções práticas. O tom deve transmitir segurança, 
    leveza e presença. A pessoa deve sentir que está conversando com alguém que 
    realmente se importa.`;

  try {
    const aiResponse = await getAIResponse(instrucao, text);

    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Erro ao obter resposta da IA", error);
    res.status(500).json({ error: "Erro ao processar requisição." });
  }
};
