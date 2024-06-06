import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import "./admin.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Prepare request body
    const requestBody = {
      email: username, // Assuming email is used for login
      password
    };

    try {
      // Send login request
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Parse the JSON response
      const responseData = await response.json();
      
      // Extract user data from the response
      const { user } = responseData;

      // Store user data in localStorage
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('email', user.email);
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);
      localStorage.setItem('mobile_no', user.mobile_no);

      // Redirect to /admin if login successful
      navigate('/admin');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., display error message to user)
    }
  };

  return (
    <div className='container containers mt-3'>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Admin Login</h2>
          <form onSubmit={handleLogin}> {/* Call handleLogin on form submit */}
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input 
                type="text" 
                className="form-control" 
                id="username" 
                placeholder="Enter username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} // Update username state
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
