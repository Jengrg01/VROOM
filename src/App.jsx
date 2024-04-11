import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Login/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <div>
        <Header/>
        <Home/>
        <Footer/>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
