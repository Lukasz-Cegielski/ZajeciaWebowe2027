// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import Naglowek from './components/Naglowek'
import Navbar from './components/navbar'
import CategoryBar from './components/categoryBar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import AddPhotoModal from './components/AddPhotoModal'
import FiltersOffcanvas from './components/FiltersOffCanvas'
function App() {
   return (
    <>
    <Navbar></Navbar>
    <Naglowek/>
    <main className='container'>
      <CategoryBar/>
      <Gallery/>
    </main>
    <Footer/>
    <AddPhotoModal/>
    <FiltersOffcanvas/>
    </>
  )
}

export default App
