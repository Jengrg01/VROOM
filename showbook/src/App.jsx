import React, { useState } from 'react';
import './App.css'; 
import img1 from './img/byd.jpg'; 
import img2 from './img/nexon.png'; 
import img3 from './img/scorpio.png'; 
import img4 from './img/verna.png'; 

function App() {
  const [sortBy, setSortBy] = useState('1'); 

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/1">1 - Search</a></li>
          <li><a href="/2" className="availability-link">2 - Availability</a></li>
          <li><a href="/3">3 - Book</a></li>
          <li><a href="/4">4 - Confirm</a></li>
        </ul>
      </nav>
     
      {/* container for sorting filter */}
      <div className="sort-container">
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortBy} onChange={handleSortChange}>
          <option value="1"> Select</option>
          <option value="2">2 - Availability</option>
          <option value="3">3 - Book</option>
          <option value="4">4 - Confirm</option>
        </select>
      </div>
      
      {/* First car details */}
      <div className="car-details">

        <div className="image-section">
          <img src={img1} alt="BYD" />
        </div>
        <h2 className="title">BYD - Car</h2> 
        <div className="listing-section">
          
          <ul>
            <li>Passenger: 5</li>
            <li>Doors: 4</li>
            <li>Type: Compact SUV  </li>
            <li>Luggage: 3 bags</li>
            </ul>
            </div>

    <div className="features">
      <ul>
      <li>
       Blind Spot Detection
      </li>
      <li>
         Moon Roof
      </li>
      <li>
        Automatic Transmission
      </li>
      <li>
        Air Conditioning 
      </li>
      
      </ul>
    </div>

        <div className="price-section">
          <p>Estimated Price</p>
          <p>NPR 50,000</p>

          <div className="btn">
            <button className="book-now-button">Book Now</button>
          </div>
        </div>
      </div>

      {/* Second car details */}
      <div className="car-details">
        <div className="image-section">
          <img src={img2} alt="TATA Nexon" />
        </div>
        <div className="listing-section">
          <h2 className="title2">TATA Nexon - Car</h2> 
          <ul>
            <li>Passenger: 4</li>
            <li>Doors: 4</li>
            <li>Type: Compact SUV</li>
            <li>Luggage: 3 bags</li>
          </ul>
        </div>
    <div className="features2">
      <ul>
      <li>
        Keyless Entry/Start
      </li>
      <li>
       Air Conditioning
      </li>
      <li>
        Sun Roof
      </li>
      <li>
        Automatic Transmission  
      </li>
      
      </ul>
    </div>

        <div className="price-section">
          <p>Estimated Price</p>
          <p>NPR 45,000</p>
          <div className="btn">
            <button className="book-now-button">Book Now</button>
          </div>
        </div>
      </div>

      {/* Third car details */}
      <div className="car-details">
        <div className="image-section">
          <img src={img3} alt="Scorpio" />
        </div>
        <div className="listing-section">
          <h2 className="title3">Scorpio - Jeep</h2> 
          <ul>
            <li>Passenger: 7</li>
            <li>Doors: 4</li>
            <li>Type: SUV</li>
            <li>Luggage: 5 bags</li>
          </ul>
        </div>
    <div className="features3">
      <ul>
      <li>
        High ground clearance
      </li>
      <li>
       Four-Wheel Drive (4WD)
      </li>
      <li>
       Air Conditioning
      </li>
      <li>
        Manual Transmission
      </li>
      
      </ul>
    </div>

        <div className="price-section">
          <p>Estimated Price</p>
          <p>NPR 65,000</p>
          <div className="btn">
            <button className="book-now-button">Book Now</button>
          </div>
        </div>
      </div>

      {/* Fourth car details */}
      <div className="car-details">
        <div className="image-section">
          <img src={img4} alt="Verna" />
        </div>

        <div className="listing-section">
          <h2 className="title4">Verna - Sedan</h2> 
          <ul>
            <li>Passenger: 4</li>
            <li>Doors: 4</li>
            <li>Type: Sedan</li>
            <li>Luggage: 4 bags</li>
          </ul>
        </div>
    <div className="features4">
      <ul>
      <li>
        Comfortable Seat
      </li>
      <li>
        Infotainment System
      </li>
      <li>
        Air Conditioning
      </li>
      <li>
        Automatic Transmission
      </li>
      
      </ul>
    </div>

        <div className="price-section">
          <p>Estimated Price</p>
          <p>NPR. 30,000</p>

          <div className="btn">
            <button className="book-now-button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default App;
