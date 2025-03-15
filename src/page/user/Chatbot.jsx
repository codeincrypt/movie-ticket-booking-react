import { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async () => {
    setMessages([...messages, { text: userInput, sender: 'user' }]);
    const response = await axios.post('http://localhost:3000/chat', { query: userInput });
    setMessages([...messages, { text: userInput, sender: 'user' }, { text: response.data.response, sender: 'bot' }]);
    setUserInput('');
  };

  return (
    <div>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
        placeholder="Ask a question..." 
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
