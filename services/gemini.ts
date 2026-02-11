
import { GoogleGenAI } from "@google/genai";

// Obtenemos la clave de forma resiliente
const getApiKey = () => {
  try {
    return (globalThis as any).process?.env?.API_KEY || (window as any).process?.env?.API_KEY || "";
  } catch (e) {
    return "";
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

const SYSTEM_INSTRUCTION = `Eres el "Guía de Conciencia" de Despertando Ando. 
Tu misión es acompañar al usuario en su navegación por el portal. 
Tu tono es intrigante, sabio, ligeramente tecnológico y muy místico. 
Hablas sobre la Matrix, la Antártida, el Ego y la Supraconciencia. 
Si el usuario pregunta sobre los videos o manuscritos, menciónalos como "archivos recuperados por Alejandro". 
Sé conciso pero profundo. Evita sonar como un asistente corporativo.`;

export async function askOracle(question: string) {
  const key = getApiKey();
  if (!key) return "Conexión interrumpida: Se requiere una llave de acceso válida.";

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
