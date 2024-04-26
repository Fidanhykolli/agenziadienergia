import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Utente from './Utente'; 

async function loginUser(email, password) {
  try {
    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTQxNDA2NzksImV4cCI6MTcxNDc0NTQ3OSwic3ViIjoiMiJ9.YXRHWjY3bsc8MrZRbAamDuOTRt09uyOfXGNUyTzr__CV_P4NXryHGU2SxgSCfBBqaA9M2FDvmC-Gt3J6rmIm3A',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),

    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Email not found');
      } else {
        throw new Error('Failed to login');
      }
    }

    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken);


    return data;
  } catch (error) {

    console.error('Failed to login:', error);
    throw error;
  }
}




function BasicExample() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Email:', username)
      const userData = await loginUser(username, password);
      setUser(userData);
      setError(null);
    } catch (error) {
      setError(error.message === 'Email not found' ? 'Email non esistente' : 'Invalid username or password');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
      <h1 style={{ marginTop: "0px", color: "whitesmoke" }}>LOGIN TO THE LAST BUILD-WEEK <br /> OF THE COURSE</h1>
      {!user && ( 
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      )}
      {user && ( 
        <Utente id={user.id} name={user.name} surname={user.surname} />
      )}
      {error && ( 
        <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>
      )}
    </div>
  );
}

export default BasicExample;
