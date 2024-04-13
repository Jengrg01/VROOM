import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!phoneNumber || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Send a request to the server to verify the credentials
      const response = await axios.post('http://localhost:3001/login', { 
        phoneNumber,
        password
      });

      const { data } = response;
      
      if (data.loggedIn) {
        alert('Login successful!');
        // Redirect the user to the home page or any other page upon successful login
        navigate('/');
      } else {
        // If login failed, check if the user needs to register
        if (data.redirectTo) {
          if (window.confirm(data.message)) {
            // If the user needs to register, redirect to the registration page
            navigate(data.redirectTo);
          }
        } else {
          // If login failed due to invalid credentials, show an alert
          alert(data.message);
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className='d-flex vh-100 bg-beige justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2 className="text-left mb-4">Login</h2>
          <div className="mb-3">
            <label htmlFor='phone number' className="form-label">Phone Number</label>
            <input
              type='text'
              id='phoneNumber'
              placeholder='Enter phone number'
              className='form-control'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='password' className="form-label">Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>  
          </div>   
          <div className="d-flex justify-content-end">
            <button type="submit" className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
