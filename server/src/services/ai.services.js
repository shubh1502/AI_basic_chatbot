import ai from "../config/ai.js";

export default async function generateResponse(message) {
  // console.log("Generating response for message:", message);
  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: message,
  });

  console.log("AI Response:", response.text);

  return response.text;
}
