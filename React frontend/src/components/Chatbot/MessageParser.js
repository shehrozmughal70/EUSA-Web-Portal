class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()
        console.log(lowerCaseMessage);
        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            this.actionProvider.greet()
        }
    }
}

export default MessageParser