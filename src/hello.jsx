import React from 'react';
import './hello.css';
import { useEffect, useState } from 'react';
import { Link, Routes,} from 'react-router-dom';
import axios from 'axios';
import EventPage from './pages/Event';


export const Hello = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [author, setUserName] = useState('');
  const [eventClicked, setEventClicked] = useState(false);

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
          if (response.data.author) {
            setUserName(response.data.author);
          }
          setLoggedIn(true);
        })
        .catch(() => {
          setLoggedIn(false);
        });
    } else {
      setLoggedIn(false);
    }
  }, []);

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
  const handleEventClick = () => {
    setEventClicked(true);
  };

  return  (
    <div className="main-container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Travel Mate</h1>
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
                  <button className="login-btn" onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/register" className="login-btn">Login</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="middle-content">
        <div className="explore-section">
          <div className="text-and-image">
            <div className="image-container">
              <div className="text-content">
                <h2>Explore Nepal With Travel Mate</h2>
                <p>TravelMate is your gateway to adventure and connection. Just as Nepal weaves together traditions and breathtaking landscapes, TravelMate is here to bring together friends and travelers in a symphony of exploration and connection. Whether you're a trekking enthusiast, a spiritual seeker, or a lover of diverse cultures, TravelMate offers more than just a platform.</p>
                <p>Join us now and explore the heart and soul of travel with friends by your side. TravelMate – where journeys become memories, and friends become travel companions.</p>
              </div>
            </div>
            <div className="image-container">
              <img src="/src/images/1000_F_534919567_ASQm15k7Wg4pOnW0NHnsbC3p1yOJb0sM.jpg" alt="Image 1" />
              <img src="/src/images/hands-holding-smartphone-messaging_24908-70834.avif" alt="Image 2" />
              <img src="/src/images/journey-concept-illustration_114360-4109.jpg" alt="Image 3" />
            </div>
          </div>
{!loggedIn && (
            <Link to="/register" className="join-button">
              Join us now
            </Link>
          )}        </div>
      </div>
      <div className="additional-content">
        <div className="discover-section">
          <div className="text-and-image">
            <div className="text-content">
              <h2>Discover New Places</h2>
              <p>Explore hidden gems and beautiful destinations with Travel Mate.</p>
              {!loggedIn && (
                <Link to="/event/confirmation" className="explore-button">
                  Explore Now
                </Link>
              )}              </div>
            <div className="image-container">
              <img src="/src/images/1000_F_534919567_ASQm15k7Wg4pOnW0NHnsbC3p1yOJb0sM.jpg" alt="Image 1" />
              <img src="/src/images/hands-holding-smartphone-messaging_24908-70834.avif" alt="Image 2" />
              <img src="/src/images/journey-concept-illustration_114360-4109.jpg" alt="Image 3" />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} TravelMate</p>
        </div>
      </footer>
    </div>
  )   ;
}
