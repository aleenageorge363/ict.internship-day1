import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Reg from './components/Reg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>welcome</h1> */}
      <Navbar/>
      <Reg/>
      
    </>
  )
}

export default App
