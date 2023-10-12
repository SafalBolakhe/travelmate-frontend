import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './confirmation.css';
import axios from 'axios';

function Confirmation() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [confirmationData, setConfirmationData] = useState([]);
  const loggedInUser = localStorage.getItem('username');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .get('http://localhost:3000/event/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setLoggedIn(true);
          setConfirmationData(response.data);
        })
        .catch(() => {
          setLoggedIn(false);
        });
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleTagAlong = (eventId, authorId) => {
    const token = localStorage.getItem('token');
  
    if (loggedInUser === authorId) {
      alert('You are the author of this event.');
      return;
    } 
  
    const isUserAlreadyParticipant = confirmationData.some((event) =>
      event.participants.some((participant) => participant.id === loggedInUser && event._id === eventId)
    );
  
    if (isUserAlreadyParticipant) {
      alert('You are already a participant in this event.');
      return;
    }
  
    // Send the tag along request
    axios
      .put(
        `http://localhost:3000/event/tagalong?event=${eventId}`,
        { status: 'Accepted' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log('Tag Along successful:', response.data);
      })
      .catch((error) => {
        console.error('Tag Along error:', error);
      });
  };

  return loggedIn ? (
    <div>
      <h1 className="confirmation-header">Tag along</h1>
      <Link to="/">
        <button className="go-back-button">Go Back</button>
      </Link>
      <div className="events-container">
        {confirmationData.length > 0 ? (
          <div className="event-list">
            {confirmationData.map((event, index) => (
              <div key={index} className="event-box">
                <strong>Event {index + 1}:</strong>
                <p>Host: {loggedInUser === event.author ? 'You are the author' : event.author}</p>
                <p>From: {event.from}</p>
                <p>To: {event.to}</p>
                <p>Start Date: {event.content}</p>
                <p>End Date: {event.endDate}</p>
                <p>Number of Travelers: {event.traveler}</p>
                <p>Description: {event.description}</p>
                <Link to="/Chatroom">
                  <button
                    className="tagalong-button"
                    onClick={() => handleTagAlong(event._id, event.author)}
                  >
                    Chat
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No events to display.</p>
        )}
      </div>
    </div>
  ) : null;
}

export default Confirmation;
