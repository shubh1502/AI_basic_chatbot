import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY);
export default ai;
