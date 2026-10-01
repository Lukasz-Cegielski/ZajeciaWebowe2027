import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const kursy  = [
    'Programowanie W C#',
    'Angular dla początkujących',
    'Kurs Django',
    'Wprowadzenie do SQL'
  ]

  return (
    <div className="container py-4" style={{maxWidth : 600}}>
      <h1 className="h3 mb-4">Zapisy na kursy</h1>
      <h2 className="h5">Liczba kursów: {kursy.length}</h2>
      <ol>
        {kursy.map((kurs,index) =>{
          <li key={index}>{kurs}</li>
        })}
      </ol>
    </div>
      
  )
}

export default App
