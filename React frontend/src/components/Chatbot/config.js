import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName: "LearningBot",
    initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?")],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#007bff",
        },
        chatButton: {
            backgroundColor: "#007bff",
        },
    },
}

export default config