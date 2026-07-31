// import { generateResponse } from "./ai.service_old.js";
import { generateResponse } from "./ai.service.js";
import { saveMessage, getConversation } from "./chat.services_mongo.js";
import { similaritySearch } from "./rag/vectordb.service.js";

export default async function chatService(userId, message) {
    // 1. Save user message
    await saveMessage(userId, "user", message);

    // 2. Fetch conversation history
    let conversation = await getConversation(userId);
    console.log("Conversation history:", conversation); 
    if (!conversation || conversation.length === 0) {
        console.log("no converstaio History")
        conversation = [{ role: "user", content: message }];
        const aiResponse = await generateResponse(conversation);
    }
    const relevantDocs = await similaritySearch(message, 3);

    const aiResponse = await generateResponse(
        conversation,
        relevantDocs
    );

    // 3. Save assistant response
    await saveMessage(userId, "assistant", aiResponse);

    // 4. Return response
    return aiResponse;
}