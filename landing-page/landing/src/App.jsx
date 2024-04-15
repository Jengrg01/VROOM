import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'; // Import the Header component
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './Home';

function App() {
  return (
    <Router>
      <div> {/* Add a wrapper div */}
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
