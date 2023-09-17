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
    author: '',
    likes: '',
    comments: '',
    content: '',
    participants: '',
    status: '',
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
      author: formData.author,
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
    window.location.href ="/event/confirmation"
      
    })
    .catch((error) => {
      console.error("Error:", error);

    }); 
    
  }
  return loggedIn ?  (
    <div className="App">
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
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>To where to travel:</label>
                  <input
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>When do we start:</label>
                  <input
                    type="date"
                    name="likes"
                    value={formData.likes}
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
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>Travel description:</label>
                  <textarea
                  type="text"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    className="input-field" 
                  ></textarea>
                </div>
               
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
