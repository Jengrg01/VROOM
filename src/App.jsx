import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <Header/>
          <Home/>
          <Footer/>
        </div>
    </>
  )
}

export default App
