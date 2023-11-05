import React, { useState } from 'react';
import './Chat.css';
import messageData from './messageData';

export default function Chat() {
    const [messages, setMessages] = useState(messageData.messArray);
    const [input, setInput] = useState(''); // State to capture input
    const container = document.querySelector('.container');

    // Function to update the messages state with new message
    const sendMessage = () => {
        const newMessage = { sender: 'client', message: input };
        setMessages([...messages, newMessage]);
        setInput('');

        container.scrollTop = container.scrollHeight;
    };

    // Function to capture input from the textbox
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const messageDiv = messages.map((mess, index) => (
        <div key={index} className={`message ${mess.sender === 'client' ? 'client-message' : 'gpt-message'}`}>
            {mess.message}
        </div>
    ));

    return (
        <div>
            <div className='subheading'>Chat with Elon Musk </div> <br/>
            <div className='container'>
                {messageDiv}
            </div>
            <div>
                <input 
                    className='textbox'
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={(event) => event.key === 'Enter' && sendMessage()}
                ></input>
                <button 
                    className='inputButton'
                    onClick={sendMessage}
                    disabled={input.trim() === ''}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
