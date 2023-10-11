import React, { useState } from "react";
import './chatroom.css';
function Chatroom() {
  // State to store travel descriptions
  const [travelDescriptions, setTravelDescriptions] = useState([]);

  // State for chat messages
  const [chatMessages, setChatMessages] = useState([]);

  // Function to add a travel description
  const addTravelDescription = (description) => {
    // You can use this function to add travel descriptions obtained from the Confirmation page
    setTravelDescriptions([...travelDescriptions, description]);
  };

  // Function to send a chat message
  const sendMessage = (message) => {
    // You can use this function to send chat messages
    setChatMessages([...chatMessages, message]);
  };

  return (
    <div className="chatroom-container">
      <div className="travel-description">
        <h2>Travel Description</h2>
        <ul>
          {travelDescriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
      <div className="chat-ui">
        <h2>Chat System UI</h2>
        <div className="chat-messages">
          <ul>
            {chatMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
        <div className="chat-input">
          {/* Add chat input and send button here */}
          <input
            type="text"
            placeholder="Type your message..."
            // Implement onChange and value for i nput
          />
          <button
            onClick={() => {
              // Implement sending of messages here
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatroom;
