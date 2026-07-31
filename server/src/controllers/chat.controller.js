import chatService from "../services/chat.pipeline.js";

export default async function chat(req, res) {
  try {
    const { message } = req.body;
    const userId = "demo-user"; // Replace with authenticated user later

    const aiResponse = await chatService(userId, message);

    return res.status(200).json({
      success: true,
      data: aiResponse,
    });
  } catch (error) {
    console.error("Chat Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}