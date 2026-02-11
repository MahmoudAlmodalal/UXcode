import { GoogleGenAI } from "@google/genai";

// Note: In a real production app, this would be initialized with an environment variable
// accessible only via a backend proxy to protect the key.
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Validates if the API key is present.
 */
export const isGeminiConfigured = (): boolean => {
  return !!process.env.API_KEY;
};

/**
 * Placeholder function to demonstrate where AI logic would reside.
 * For example, this could be used to refine the user's contact message.
 */
export const refineMessageWithAI = async (message: string): Promise<string> => {
  if (!isGeminiConfigured()) {
    console.warn("Gemini API Key not configured.");
    return message;
  }

  try {
    // const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // const response = await ai.models.generateContent({
    //   model: 'gemini-2.5-flash-preview',
    //   contents: `Refine this business inquiry for clarity and professionalism: "${message}"`,
    // });
    // return response.text || message;
    
    // Mock return for the static demo to prevent runtime crashes without keys
    return `[AI Refined]: ${message} (This is a mock response as no API key is set)`;
  } catch (error) {
    console.error("Error refining message:", error);
    return message;
  }
};