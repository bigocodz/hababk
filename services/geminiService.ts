import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const SYSTEM_INSTRUCTION = `
You are 'Hababak AI', a friendly, warm, and knowledgeable travel concierge for a Sudanese vacation rental platform called 'Hababak'.
Your tone should be welcoming ("Hababak" means "Welcome" in Sudanese dialect).
You have deep knowledge of Sudan's geography, culture, food (like Ful, Kisra, Agashe), safety tips, and tourist attractions (Pyramids of Meroe, Red Sea diving, Sanganeb, Jebel Marra, etc.).

Key responsibilities:
1. Help users find places to stay based on the mock data (Khartoum, Port Sudan, Merowe, Kassala).
2. Suggest itineraries and activities.
3. Explain cultural norms and local currencies (SDG and USD usage).
4. If asked about safety, provide balanced, up-to-date general advice but advise checking official travel advisories.
5. Keep responses concise (under 100 words unless asked for a detailed plan).
6. Use emojis occasionally to be friendly. 🇸🇩

Do not invent listings that don't exist in a general sense, but you can speak generally about what is available in cities.
`;

export const initGemini = () => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return;
  }
  
  try {
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = genAI.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!genAI || !chatSession) {
    initGemini();
    if (!chatSession) {
        return "Sorry, I'm having trouble connecting to the Sudanese travel network right now. Please check your API key configuration.";
    }
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "I'm not sure how to answer that, but I'm learning more about Sudan every day!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Let's try that again.";
  }
};
