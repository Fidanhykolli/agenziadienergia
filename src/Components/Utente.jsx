import React, { useState, useEffect } from 'react';

function UtentiList() {
  const [utenti, setUtenti] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/auth/utenti', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' 
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch utenti');
        }
        return response.json();
      })
      .then(data => {
        setUtenti(data.content);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {utenti.map(utente => (
        <div key={utente.id} style={{ marginTop: '20px', backgroundColor: 'whitesmoke', padding: '10px', borderRadius: '5px' }}>
          <h2>User Details:</h2>
          <p>ID: {utente.id}</p>
          <p>Name: {utente.name}</p>
          <p>Surname: {utente.surname}</p>
        </div>
      ))}
    </div>
  );
}

export default UtentiList;
