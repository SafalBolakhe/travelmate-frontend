import React from 'react';
import './confirmation.css'; // Import the CSS for this component

function Confirmation({ data }) {
  return (
    <div className="confirmation-container">
      <h1 className="confirmation-header">Tag along</h1>
      <div className="confirmation-details">
        <div className="confirmation-item">
          <strong>From:</strong>
          <p>{data.from}</p>
        </div>
        <div className="confirmation-item">
          <strong>To:</strong>
          <p>{data.to}</p>
        </div>
        <div className="confirmation-item">
          <strong>Start Date:</strong>
          <p>{data.startDate}</p>
        </div>
        <div className="confirmation-item">
          <strong>End Date:</strong>
          <p>{data.endDate}</p>
        </div>
        <div className="confirmation-item">
          <strong>Number of Travelers:</strong>
          <p>{data.numTravelers}</p>
        </div>
        <div className="confirmation-item">
          <strong>Description:</strong>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="back-button-container">
        <button className="back-button">Tag along</button>
      </div>
    </div>
  );
}

export default Confirmation;
