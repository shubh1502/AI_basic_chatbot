import generateResponse from "../services/ai.services.js";
import { addModelMessage, addUserMessage, getConversation } from "../services/chat.services.js";

export default async function chat(req, res) {
  try {
    const { message } = req.body;
    addUserMessage(message);
    // console.log("Conversation History:", getConversation());
    const response = await generateResponse(getConversation());
    addModelMessage(response);

    return res.json({
      success: true,
      response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
