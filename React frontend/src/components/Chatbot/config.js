import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName: "LearningBot",
    initialMessages: [createChatBotMessage("Hi, I'm here to help. Please enter your query")],
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