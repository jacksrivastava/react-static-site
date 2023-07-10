import { useState,React } from 'react'

// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <MainContent/>
     
    </>
  )
}

export default App
