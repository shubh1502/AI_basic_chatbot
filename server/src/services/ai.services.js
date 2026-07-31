import ai from "../config/ai.js";
import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "llama-3.3-70b-versatile",
});

export async function generateResponse(conversation, retrievedDocs = []) {
    try {
        // Convert retrieved documents into plain text
        const context = retrievedDocs
            .map((doc) => doc.pageContent)
            .join("\n\n");

        // Build messages for the LLM
        const systemPrompt = `
You are a helpful AI assistant.

Use the provided context to answer the user's question.

If the context does not contain the answer, use your general knowledge.

Context:
${context}
`.trim();

        const messages = [
            {
                role: "system",
                content: systemPrompt,
            },

            ...conversation,
        ];


        const response = await model.invoke(messages);

        return response.content;
    } catch (error) {
        console.error("AI Service Error:", error);
        throw error;
    }
}