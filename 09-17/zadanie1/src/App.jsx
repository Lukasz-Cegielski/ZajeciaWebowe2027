import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Naglowek from './components/Naglowek'
import Navbar from './components/navbar'
function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Naglowek/>
      
    </>
  )
}

export default App
