import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Confirmation from './Confirmation';

function App() {
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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>TraveMate</h1>
        </header>
        <Routes>
          <Route path="/confirmation" element={<Confirmation data={formData} />} />
          <Route path="/" element={<div className="form-container">
            <h2>Plan Your Travel</h2>
            <form>
              <div className="form-group">
                <label>From where to travel:</label>
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>To where to travel:</label>
                <input
                  type="text"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>When do we start:</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>When will it end:</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Number of tag along:</label>
                <input
                  type="number"
                  name="numTravelers"
                  value={formData.numTravelers}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Travel description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="button" onClick={handleSubmit}>
                <Link to="/confirmation" style={{ textDecoration: 'none', color: 'white' }}>Post Plan</Link>
              </button>
            </form>
          </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
