import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [author, setUserName] = useState('');

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

  return loggedIn ? (
    <div>
      <h1>Welcome, {author}</h1>
      <button onClick={handleLogout}>Logout</button>
      <Link to = '/event'>
      <button>Create Event</button>
      </Link>
    </div>
  ) : null;
}

export default Dashboard;
