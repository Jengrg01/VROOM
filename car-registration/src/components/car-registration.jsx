import React, { useState } from 'react';
import "../styles/car-registration.css";

export function RegistrationForm() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    carName: '',
    carMake: '',
    carModel: '',
    carYear: '',
    engineCapacity: '', // Updated field name
    totalSeats: '', // Updated field name
    carType: '',
    carImage: null
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setUserData(prevState => ({
      ...prevState,
      carImage: imageFile
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setShowSuccessMessage(true);
    setUserData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      carName: '',
      carMake: '',
      carModel: '',
      carYear: '',
      engineCapacity: '',
      totalSeats: '',
      carType: '',
      carImage: null
    });

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 4000);
  };

  return (
    <div className="car-registration">
      <div>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="name-label">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
          <label className="name-label">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
          <label className="email-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <label className="number-label">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
            required
          />
          <h3>Car Details:</h3>
          <label className="car-details-label">Car Name:</label>
          <input
            type="text"
            id="carName"
            name="carName"
            value={userData.carName}
            onChange={handleChange}
            required
          />
          
          
          <label className="car-details-label">Engine Capacity:</label>
          <input
            type="text"
            id="engineCapacity"
            name="engineCapacity"
            value={userData.engineCapacity}
            onChange={handleChange}
            required
          />
          <label className="car-details-label">Total Seats:</label>
          <input
            type="text"
            id="totalSeats"
            name="totalSeats"
            value={userData.totalSeats}
            onChange={handleChange}
            required
          />
          <label className="car-details-label">Car Type:</label>
          <input
            type="text"
            id="carType"
            name="carType"
            value={userData.carType}
            onChange={handleChange}
            required
          />
          {/* Image Upload Field */}
          <label className="car-details-image">Upload Car Image:</label>
          <input
            type="file"
            id="carImage"
            name="carImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {showSuccessMessage && (
          <div className="success-message">
            <p>Form submitted successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
}
