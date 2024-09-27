import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header'; // Import the Header component
import './Login.css'; // Import the CSS file

const Login = ({ setIsLoggedIn, setUserEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Store user details in local storage
    localStorage.setItem('userEmail', email);
    // Security Note: Avoid storing passwords in local storage in production

    // Set the login state to true and save the email
    setIsLoggedIn(true);
    setUserEmail(email);

    // Navigate to home page after successful login
    navigate('/'); 

    // Clear the fields
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <Header userEmail={null} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} hideElements={true} /> {/* Pass hideElements as true */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? 
        <a href="/signup"> Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
