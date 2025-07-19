const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));  // Allow React
app.use(express.json());

const users = [
  { id: 1, name: 'Aryan' },
  { id: 2, name: 'Priya' },
  { id: 3, name: 'Rahul' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/message', (req, res) => {
  console.log('Message Received:', req.body.message);
  res.json({ status: 'Message received successfully' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});




 React Frontend (App.js):
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    setStatus(data.status);
    setMessage('');
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>Users:</h2>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>

      <h2>Send a Message:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          required
        />
        <button type="submit">Send</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default App;
