import React, { useState } from 'react';
import './App1.css';
import { Route, Routes, Link } from 'react-router-dom'; 
import Confirmation from './Confirmation';

function EventPage() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
    numTravelers: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="App">

      <Routes>
        <Route path="/confirmation" element={<Confirmation data={formData} />} />
        <Route
          path="/"
          element={
            <div className="form-container">
              <h1>TraveMate</h1>
              <form>
                <div className="form-group">
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
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>When will it end:</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>Number of tag along:</label>
                  <input
                    type="number"
                    name="numTravelers"
                    value={formData.numTravelers}
                    onChange={handleChange}
                    className="input-field" 
                  />
                </div>
                <div className="form-group">
                  <label>Travel description:</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="input-field" 
                  ></textarea>
                </div>
                <button className='post-button' type="button" onClick={handleSubmit}>
                  <Link to="/confirmation" style={{ textDecoration: 'none', color: 'white' }}>Post Plan</Link>
                </button>
              </form>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default EventPage;
