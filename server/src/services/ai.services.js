import ai from "../config/ai.js";

export default async function generateResponse(message) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: message,
  });

  console.log("AI Response:", response.text);

  return response.text;
}
