import React from 'react';
import './hello.css';

export const Hello = () => {
  return (
    <div className="main-container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Travel Mate</h1>
          <nav className="nav-links">
            <ul>
              <li><a href="#" className="nav-link">Create Event</a></li>
              <li><a href="#" className="nav-link">Tagalong</a></li>
              <li><button className="login-btn">Login</button></li>
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
              <p>TravelMate is your gateway to adventure and connection. Just as Nepal weaves together traditions and breathtaking landscapes, TravelMate is here to brings together friends and travelers in a symphony of exploration and connection.
Whether you're a trekking enthusiast, a spiritual seeker, or a lover of diverse cultures, TravelMate offers more than just a platform.
<p>Join us now and explore the heart and soul of travel with friends by your side. 
TravelMate – where journeys become memories, and friends become travel companions.</p>
</p>
<div className="image-container">
  <img src="/src/images/1000_F_534919567_ASQm15k7Wg4pOnW0NHnsbC3p1yOJb0sM.jpg" alt="Image 1" />
  <img src="/src/images/hands-holding-smartphone-messaging_24908-70834.avif " alt="Image 2" />
  <img src="/src/images/journey-concept-illustration_114360-4109.jpg" alt="Image 3" />
</div>
            </div >
            
            </div>
            <button className="join-button">Join us now</button>
          </div>
        </div>
      </div>
      <div className="additional-content">
        <div className="discover-section">
          <div className="text-and-image">
          <div className="text-content">
              <h2>Discover New Places</h2>
              <p>Explore hidden gems and beautiful destinations with Travel Mate.</p>
              <button className="explore-button">Explore Now</button>
            </div>
            <div className="image-container">
  <img src="/src/images/1000_F_534919567_ASQm15k7Wg4pOnW0NHnsbC3p1yOJb0sM.jpg" alt="Image 1" />
  <img src="/src/images/hands-holding-smartphone-messaging_24908-70834.avif " alt="Image 2" />
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
  );
}
