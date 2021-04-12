class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
    }

    response() {
        const responses = this.createChatBotMessage("The support team is notified and will reach you as soon as possible")
        this.updateChatbotState(responses)
    }

    fine() {
        const fine = this.createChatBotMessage("Fine what about you?")
        this.updateChatbotState(fine)
    }

    help() {
        const help = this.createChatBotMessage("How may I assist you?")
        this.updateChatbotState(help)
    }

    welcome() {
        const welcome = this.createChatBotMessage("You're welcome 😊")
        this.updateChatbotState(welcome)
    }

    morning() {
        const morning = this.createChatBotMessage("Good Morning 🌅")
        this.updateChatbotState(morning)
    }

    name() {
        const name = this.createChatBotMessage("My name is Service Bot 🤖")
        this.updateChatbotState(name)
    }
    enterEmail() {
        const emails = this.createChatBotMessage("Please provide your email")
        this.updateChatbotState(emails)
    }
    updateChatbotState(message) {

        // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider