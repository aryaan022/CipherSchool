import React from 'react';

const UserCard = ({ name, email, age }) => {
  const handleClick = () => {
    console.log(`Clicked on ${name}`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UserCard;


//app.js 

// src/App.js
import React from 'react';
import UserCard from './UserCard';

function App() {
  return (
    <div style={{ width: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
      <UserCard name="Aryan" email="aryan@example.com" age={22} />
      <UserCard name="Priya" email="priya@example.com" age={25} />
      <UserCard name="Rahul" email="rahul@example.com" age={30} />
    </div>
  );
}

export default App;
