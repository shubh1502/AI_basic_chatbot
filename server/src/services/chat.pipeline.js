// import { generateResponse } from "./ai.service_old.js";
import { generateResponse } from "./ai.service.js";
import { saveMessage, getConversation } from "./chat.services_mongo.js";
// We'll uncomment this after RAG integration
// import { retriever } from "./rag/retriever.js";

export default async function chatService(userId, message) {
    // 1. Save user message
    await saveMessage(userId, "user", message);

    // 2. Fetch conversation history
    let conversation = await getConversation(userId);
    if (!conversation || conversation.length === 0) {
        conversation = [{ role: "user", content: message }];
        const aiResponse = await generateResponse(conversation);
    }
    const relevantDocs = await retriever.invoke(message);

    const aiResponse = await generateResponse(
        conversation,
        relevantDocs
    );

    // 3. Save assistant response
    await saveMessage(userId, "assistant", aiResponse);

    // 4. Return response
    return aiResponse;
}