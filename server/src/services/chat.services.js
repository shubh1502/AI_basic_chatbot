let conversation = [];

export function addUserMessage(message) {
    conversation.push({
        role: "user",
        parts: [
            {
                text: message
            }
        ]
    });
}

export function addModelMessage(message) {
    conversation.push({
        role: "model",
        parts: [
            {
                text: message
            }
        ]
    });
}

export function getConversation() {
    return conversation;
}