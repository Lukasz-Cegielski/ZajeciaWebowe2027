import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Navbar from './components/Navbar'
import Naglowek from './components/Naglowek'
function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Naglowek/>
      
    </>
  )
}

export default App
