import React, { useState, useEffect } from 'react';
import './App1.css';
import { Route, Routes, Link } from 'react-router-dom'; 
import Confirmation from './Confirmation';
import axios from 'axios';

function EventPage() {

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
  const [formData, setFormData] = useState({
    
    from: '',
    to: '',
    likes: '',
    comments: '',
    content: '',
    participants: '',
    status: '',
    traveler: '',
    description: '',
  });
  const [confirmationData, setConfirmationData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  

   const token = localStorage.getItem('token');

    axios.post('http://localhost:3000/event/addevent', {
      from: formData.from,
      to: formData.to,
      endDate: formData.endDate,
      traveler: formData.traveler,
      description: formData.description,
      likes: formData.likes,
      content: formData.content,
      comments: formData.comments,
      participants: formData.participants,
      status: formData.status,  
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .then((response) => {

      console.log('event created:', response.data);
      setConfirmationData(response.data); 
     // localStorage.setItem('confirmationData', JSON.stringify(response.data));
     alert("event created sucessfully"), response.data;
 window.location.href ="/event/confirmation"
      
    })
    .catch((error) => {
      console.error("Error:", error);

    }); 
  }
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

    <div className="App">
      
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
     
      <Routes>
      <Route path="/confirmation" element={<Confirmation />} />
        <Route 
          path="/"
          element={
            <div className="form-container">
              <h1>TraveMate</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group" >
                  <label>From where to travel:</label>
                  <input
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>To where to travel:</label>
                  <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>When do we start:</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>When will it end:</label>
                  <input
                    type="date"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>Number of tag along:</label>
                  <input
                    type="Number"
                    name="traveler"
                    value={formData.traveler}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>Travel description:</label>
                  <textarea
                  type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="input-text" /**AAYUSHFRONTEND */
                  ></textarea>
                </div>

                <Link to="/">
        <button className="go-back-button">Go Back</button>
      </Link>
               
  <button className='post-button' type="submit">Post Plan</button>

              </form>
            </div>
          }
        />
      </Routes>
    </div>
  ): null;
}


export default EventPage;
