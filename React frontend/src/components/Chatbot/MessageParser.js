import axios from "axios";

var isValid=true;
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
        else if (lowerCaseMessage.includes("how are")) {
            this.actionProvider.fine()
        }
        else if (lowerCaseMessage.includes("help")) {
            this.actionProvider.help()
        }
        else if (lowerCaseMessage.includes("thank")) {
            this.actionProvider.welcome()
        }
        else if (lowerCaseMessage.includes("morning")) {
            this.actionProvider.morning()
        }
        else if (lowerCaseMessage.includes("name")) {
            this.actionProvider.name()
        }
        else if (lowerCaseMessage.includes("live")) {
            this.actionProvider.live()
        }
        else if (!(lowerCaseMessage.includes("@")) && isValid) {
            queries.query = lowerCaseMessage;
            this.actionProvider.enterEmail()
        }
        else if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(lowerCaseMessage) && isValid ) {
            queries.email = lowerCaseMessage;
            isValid=false;
            this.actionProvider.enterMobileNumber();
        }
        else if (lowerCaseMessage.length<=20 && Number.isInteger(parseInt(lowerCaseMessage))) {
            console.log( Number.isInteger(parseInt(lowerCaseMessage)) );
            
            queries.mobile = lowerCaseMessage;
            this.actionProvider.response()

            axios.post('http://localhost:8080/admin/sendQuery', {
                issue: queries,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            isValid=true;
        }
    }
}

export default MessageParser