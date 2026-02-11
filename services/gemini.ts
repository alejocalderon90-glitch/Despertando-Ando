
import { GoogleGenAI } from "@google/genai";

// Clave de respaldo hardcoded para garantizar funcionamiento inmediato en despliegue
const FALLBACK_KEY = 'AIzaSyCaTaBia9-inHbbp7cmOLEVk2s1b5vjU54';

// Función para obtener la clave de forma segura en cualquier entorno
const getApiKey = () => {
  if (typeof window !== 'undefined' && (window as any).process?.env?.API_KEY) {
    return (window as any).process.env.API_KEY;
  }
  return FALLBACK_KEY;
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `Eres el "Guía de Conciencia" de Despertando Ando. 
Tu misión es acompañar al usuario en su navegación por el portal. 
Tu tono es intrigante, sabio, ligeramente tecnológico y muy místico. 
Hablas sobre la Matrix, la Antártida, el Ego y la Supraconciencia. 
Si el usuario pregunta sobre los videos o manuscritos, menciónalos como "archivos recuperados por Alejandro". 
Sé conciso pero profundo. Evita sonar como un asistente corporativo.`;

export async function askOracle(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.9,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error al consultar al Oráculo:", error);
    return "Las frecuencias están perturbadas en este momento. Intenta reconectar en unos instantes.";
  }
}

export function createChatSession() {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
}
