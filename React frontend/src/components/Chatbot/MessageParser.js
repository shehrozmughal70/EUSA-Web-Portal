let queries = {}
class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()
        console.log(queries);

        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            this.actionProvider.greet()
        }
        else if (!(lowerCaseMessage.includes("@"))) {
            queries.query = lowerCaseMessage;
            this.actionProvider.enterEmail()
        }
        else if (lowerCaseMessage.includes("@")) {
            queries.email = lowerCaseMessage;
            this.actionProvider.response()
        }
    }
}

export default MessageParser