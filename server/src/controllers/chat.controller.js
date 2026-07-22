import generateResponse from "../services/ai.services.js";

export default async function chat(req, res) {
  try {
    const { message } = req.body;
    const response = await generateResponse(message);

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
