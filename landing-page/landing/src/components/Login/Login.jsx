import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
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

      if (data.message === "Login successful") {
        // Redirect to the home page upon successful login
        navigate('/home');
      } else {
        // Handle other cases, such as invalid credentials
        alert(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <form onSubmit={handleSubmit}>
          <h2 className="login-heading">Login</h2>
          <div className="form-group">
            <label htmlFor='phone number'>Phone Number</label>
            <input
              type='text'
              id='phoneNumber'
              placeholder='Enter phone number'
              className='form-control'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
