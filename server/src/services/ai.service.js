// import ai from "../config/ai.js";
import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
});

export async function generateResponse(messages) {
let finalmessage = []
console.log("Messages length:", messages.length);
if(Array.isArray(messages)) {
  // if(Array.isArray(messages) && messages.length > 1) {
  console.log('Messages is an array:', messages);
    finalmessage = messages.map(message => ({
    role: message.role,
    content: message.content,
}));
  }  
  else{
    finalmessage = [{ role: "user", content: messages }];
  }

  console.log(finalmessage)
    const response = await model.invoke(finalmessage);
    console.log(`AI response: ${response.content}`);

    return response.content;
}
