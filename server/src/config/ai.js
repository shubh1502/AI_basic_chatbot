import OpenAI from "openai";

// console.log("GROQ_API_KEY:", process.env.GROQ_API_KEY);
const ai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export default ai;