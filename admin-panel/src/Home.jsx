import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    const [showWelcome, setShowWelcome] = useState(true);

    const handleButtonClick = () => {
      setShowWelcome(false);
    };

  return (
    <div className="container mt-5">
        {showWelcome && (
          <div>
            <h1>Welcome to Admin Panel</h1>
            <p>Manage users and cars here.</p>
          </div>
        )}
        <div className="row mt-3">
          <div className="col-md-6">
            <Link to="/user" className="btn btn-primary btn-block" onClick={handleButtonClick}>Manage Users</Link>
          </div>
          <div className="col-md-6">
            <Link to="/cars" className="btn btn-success btn-block" onClick={handleButtonClick}>Manage Cars</Link>
          </div>
        </div>
      </div>
  )
}

export default Home
