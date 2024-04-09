// import { useStat } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User/User';
import Cars from './components/Cars/Cars';
import Home from './Home';
import CreateUser from './components/User/CreateUser';
import UpdateUser from './components/User/UpdateUser';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );   
}

export default App;
