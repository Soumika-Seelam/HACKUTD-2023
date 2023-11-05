import React, { useState, useEffect  } from 'react';
import './Chat.css';
import messageData from './messageData';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import mentorList from '../components/data'

export default function Chat() {
    const{ id } = useParams()
    console.log(id)
    const personality1 = mentorList.characterData[id-1].name
    console.log(personality1)

    const [messages, setMessages] = useState(messageData.messArray);
    const [input, setInput] = useState(''); // State to capture input
    
    // Function to update the messages state with new message
    const sendMessage = async(e) => {
        e.preventDefault()
        const newMessage = { message: input, sender: 'client'};
        setMessages([...messages, newMessage]);
        setInput(''); // Clear input after sending
        console.log(messages)
        console.log(messages)
        let lastMessage = newMessage.message;
        let response = await axios.post('http://localhost:5000/gpt', {
            question: lastMessage,
            personality: personality1
          });
        let tempMessage = messages
        console.log(response)
        const newResponse = {message: response.data.response, sender: 'gpt'}
        setMessages([...tempMessage, newMessage, newResponse])
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
