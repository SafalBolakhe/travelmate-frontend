 /*AAYUSHFRONTEND*/
 /* THIS ENTIRE THING */

import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'; 
import './chatroom.css';
import axios from 'axios';
function Chatroom() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .get('http://localhost:3000/event/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {

          setLoggedIn(true);
        })
        .catch(() => {

          setLoggedIn(false);
        });
    } else {
      setLoggedIn(false);
    }
  }, [] );
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

  const handleLogout = () => {
    axios
      .post(
        'http://localhost:3000/auth/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then(() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Logout failed', error);
      });
  };
  return loggedIn ?  (
    
    <div className="chatroom-container">

      {/** AAYUSHFRONTEND */}
      {/* Copy from here till */}
      <div className="navbar"> 
        <div className="navbar-content">
          <Link to="/" className="logo"><h1 className="logo">Travel Mate</h1></Link>
          <nav className="nav-links">
          <ul>
              {loggedIn && (
                <>
                //  <li><Link to="/event" className="nav-link">Create Event</Link></li>
                  <li><Link to="/event/confirmation" className="nav-link">Tagalong</Link></li>
                </>
              )}
              <li>
                {loggedIn ? (
                  <button className="login-butt" onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/register" className="login-butt">Login</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
       {/* HERE */}
      {/** AAYUSHFRONTEND */}

      <div className="travel-chat-container">

      <div className="travel-description">
        <h2>Travel Description</h2>
        <ul>
          {travelDescriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
      <div className="chat-ui">
        <div className="headerDiv">
        <h2>Chat System UI</h2>

        <div className="chat-messages">
          <ul>
            {chatMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
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
    </div>
  ): null; /**AAYUSHFRONTEND */
}

export default Chatroom;
