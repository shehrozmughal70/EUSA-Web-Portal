import React from 'react'
import './Chatbot.css';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

const Bot = () => {
    return (
        <div className="bot">
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
    )
}

export default Bot
