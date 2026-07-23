import Message from "../models/chat.models.js";

export async function saveMessage(userId, role, content) {
  return await Message.create({
    userId,
    role,
    content,
  });
}

export async function getConversation(userId) {
  return await Message.find({ userId })
    .sort({ createdAt: 1 })
    .lean();
}   