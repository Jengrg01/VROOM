import { useState } from 'react'
import '../styles/App.css'
import { RegistrationForm } from './car-registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RegistrationForm/>
    </>
  )
}

export default App
