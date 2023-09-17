  import React, { useEffect, useState } from 'react';
  import {Link} from "react-router-dom"
  import './confirmation.css';
  import axios from 'axios';

  function Confirmation() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [confirmationData, setConfirmationData] = useState([]);

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

    /* const handleLike = (eventId) => {

    };

    const handleComment = (eventId) => {

    };
*/

const handleTagAlong = () => {
};
    return loggedIn ? (
      <div className="body-container">
        <h1 className="confirmation-header">Tag along</h1>
        <div className="events-container">
          {confirmationData.length > 0 ? (
            <div className="event-list">
              {confirmationData.map((event, index) => (
                <div key={index} className="event-box">
                  <strong>Event {index + 1}:</strong>
                  <p>Host: {event.author}</p>
                  <p>From: {event.likes}</p>
                  <p>To: {event.status}</p>
                  <p>Start Date: {event.content}</p>
                  <p>End Date: {event.comments}</p>
                  <p>Number of Travelers: {event.participants}</p>
                  <p>Description: {event.description}</p>
                  <Link to="/Chatroom">
                  <button className="tagalong-button" onClick={handleTagAlong}>
                    Tag along
                  </button>
                </Link>
                  <button
                    className="like-button"
                    onClick={() => handleLike(event.id)}
                  >
                    Like
                  </button>
                  <button
                    className="comment-button"
                    onClick={() => handleComment(event.id)}
                  >
                    Comment
                  </button>
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
