import { useState } from 'react'
import graminioLogo from './assets/graminio_logo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://graminio.com/" target="_blank">
          <img src={graminioLogo} className="logo" alt="GraminIO logo" />
        </a>
      </div>
      <h1>Coming soon GraminIO apps portal</h1>
    </>
  )
}

export default App
