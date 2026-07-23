import { generateResponse } from "../services/ai.services.js";
import { saveMessage, getConversation } from "../services/chat.services_mongo.js";
// import { addModelMessage, addUserMessage, getConversation } from "../services/chat.services.js";

export default async function chat(req, res) {
  try {
    const { message } = req.body;
const userId = "demo-user";
await saveMessage(userId, "user", message);
const conversation = await getConversation(userId);
const aiResponse = await generateResponse(conversation);
await saveMessage(userId, "assistant", aiResponse);

res.json({
    success: true,
    data: aiResponse
});
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
