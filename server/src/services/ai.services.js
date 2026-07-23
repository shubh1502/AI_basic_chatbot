import ai from "../config/ai.js";

export async function generateResponse(messages) {
let finalmessage = []
console.log("Messages length:", messages.length);
if(Array.isArray(messages)) {
  // if(Array.isArray(messages) && messages.length > 1) {
  console.log('Messages is an array:', messages);
    finalmessage = messages.map((msg) => ({
          role: msg.role === "model" ? "assistant" : msg.role,
          content: msg.parts[0].text,
      }));
  }  
  else{
    finalmessage = [{ role: "user", content: messages }];
  }

  console.log(finalmessage)
    const response = await ai.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: finalmessage,
    });

    return response.choices[0].message.content;
}
